import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0kpy_s4i.css';
import '../../css/h/h4optxb8l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0kpy_s4i"/><path clip-rule="evenodd" class="h4optxb8l"/></g>`,
		"fallback": "glyphs:tachometer-3-bold",
	});
}

export default Component;
