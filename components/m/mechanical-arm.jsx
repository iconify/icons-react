import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkh4peb9h.css';
import '../../css/a/al7hy6bjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mkh4peb9h"/><path class="al7hy6bjo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mechanical-arm",
	});
}

export default Component;
