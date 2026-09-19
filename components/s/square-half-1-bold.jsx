import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaznb6ikb.css';
import '../../css/m/mcrgcvfnv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zaznb6ikb"/><path clip-rule="evenodd" class="mcrgcvfnv"/></g>`,
		"fallback": "glyphs:square-half-1-bold",
	});
}

export default Component;
