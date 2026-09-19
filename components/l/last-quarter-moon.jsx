import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2924i6bf.css';
import '../../css/m/m8y5j7w3w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k2924i6bf"/><path class="m8y5j7w3w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:last-quarter-moon",
	});
}

export default Component;
