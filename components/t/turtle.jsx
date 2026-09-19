import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/izvpq7blu.css';
import '../../css/z/zo4o8_dca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="izvpq7blu"/><path class="zo4o8_dca"/></g>`,
		"fallback": "fluent-emoji-high-contrast:turtle",
	});
}

export default Component;
