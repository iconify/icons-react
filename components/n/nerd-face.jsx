import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7zv8u7nz.css';
import '../../css/h/hc6ikkmba.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g7zv8u7nz"/><path class="hc6ikkmba"/></g>`,
		"fallback": "fluent-emoji-high-contrast:nerd-face",
	});
}

export default Component;
