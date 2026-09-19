import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h7b5jt26f.css';
import '../../css/u/ua8a7eown.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h7b5jt26f"/><path class="ua8a7eown"/></g>`,
		"fallback": "glyphs:spade-bold",
	});
}

export default Component;
