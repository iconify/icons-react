import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdl7jv-0l.css';
import '../../css/g/g8d1apbol.css';
import '../../css/p/plp57t6nf.css';
import '../../css/z/zokkzerqw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cdl7jv-0l"/><path class="g8d1apbol"/><path class="plp57t6nf"/><path class="zokkzerqw"/></g>`,
		"fallback": "streamline-flex-color:tea-cup",
	});
}

export default Component;
