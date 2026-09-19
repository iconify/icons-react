import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gxyqf6bqs.css';
import '../../css/m/me1_6-b3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gxyqf6bqs"/><path class="me1_6-b3q"/></g>`,
		"fallback": "si-glyph:square-checked",
	});
}

export default Component;
