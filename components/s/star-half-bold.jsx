import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch22_9tgd.css';
import '../../css/l/lz45b_bzh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ch22_9tgd"/><path class="lz45b_bzh"/></g>`,
		"fallback": "glyphs:star-half-bold",
	});
}

export default Component;
