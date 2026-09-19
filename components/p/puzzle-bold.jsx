import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i92hlablv.css';
import '../../css/j/j9z0u4b4a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i92hlablv"/><path class="j9z0u4b4a"/></g>`,
		"fallback": "glyphs:puzzle-bold",
	});
}

export default Component;
