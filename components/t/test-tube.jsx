import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tblaxcceu.css';
import '../../css/o/oex0tpr5i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tblaxcceu"/><path class="oex0tpr5i"/></g>`,
		"fallback": "si-glyph:test-tube",
	});
}

export default Component;
