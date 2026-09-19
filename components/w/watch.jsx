import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yc-k2-bov.css';
import '../../css/n/n-l2-abgc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yc-k2-bov"/><path class="n-l2-abgc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:watch",
	});
}

export default Component;
