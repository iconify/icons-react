import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6scb8b-g.css';
import '../../css/j/j5zg0bc7u.css';
import '../../css/o/ocihuquga.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x6scb8b-g"/><path class="j5zg0bc7u"/><path class="ocihuquga"/></g>`,
		"fallback": "glyphs:toggle-1-bold",
	});
}

export default Component;
