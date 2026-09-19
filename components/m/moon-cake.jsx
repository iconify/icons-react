import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s6wq3mb8z.css';
import '../../css/w/w604i6bbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s6wq3mb8z"/><path class="w604i6bbk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:moon-cake",
	});
}

export default Component;
