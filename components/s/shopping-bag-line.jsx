import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i1deflb9u.css';
import '../../css/m/m7d-hebon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i1deflb9u"/><path class="m7d-hebon"/></g>`,
		"fallback": "majesticons:shopping-bag-line",
	});
}

export default Component;
