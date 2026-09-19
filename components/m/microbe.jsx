import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uy6kaqwzr.css';
import '../../css/e/e9ykj5byl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uy6kaqwzr"/><path class="e9ykj5byl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:microbe",
	});
}

export default Component;
