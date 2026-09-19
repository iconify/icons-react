import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o35-s-zir.css';
import '../../css/k/ki7t3mbgc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o35-s-zir"/><path class="ki7t3mbgc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:motor-scooter",
	});
}

export default Component;
