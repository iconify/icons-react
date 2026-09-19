import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nol7t7bij.css';
import '../../css/e/erth8cclr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nol7t7bij"/><path class="erth8cclr"/></g>`,
		"fallback": "glyphs:peace-bold",
	});
}

export default Component;
