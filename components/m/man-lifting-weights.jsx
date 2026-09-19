import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivipgsbps.css';
import '../../css/i/i01gd7s9p.css';
import '../../css/k/k15ug01ci.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ivipgsbps"/><path class="i01gd7s9p"/><path class="k15ug01ci"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-lifting-weights",
	});
}

export default Component;
