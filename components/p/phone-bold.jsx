import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvep4fb6q.css';
import '../../css/v/vjrt-8a6e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rvep4fb6q"/><path class="vjrt-8a6e"/></g>`,
		"fallback": "glyphs:phone-bold",
	});
}

export default Component;
