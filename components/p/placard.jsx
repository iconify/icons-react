import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kg9obqw0s.css';
import '../../css/u/uw9tt-bqo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kg9obqw0s"/><path class="uw9tt-bqo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:placard",
	});
}

export default Component;
