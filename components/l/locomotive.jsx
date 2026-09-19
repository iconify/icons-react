import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w7r2qwq-g.css';
import '../../css/j/j2w8-ac8i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w7r2qwq-g"/><path class="j2w8-ac8i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:locomotive",
	});
}

export default Component;
