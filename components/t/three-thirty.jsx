import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hu-b7tb2k.css';
import '../../css/h/hhz3-q-ih.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hu-b7tb2k"/><path class="hhz3-q-ih"/></g>`,
		"fallback": "fluent-emoji-high-contrast:three-thirty",
	});
}

export default Component;
