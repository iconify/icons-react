import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efbafvbnk.css';
import '../../css/t/t62-__bbc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efbafvbnk"/><path class="t62-__bbc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:spiral-calendar",
	});
}

export default Component;
