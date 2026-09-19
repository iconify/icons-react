import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ydq7eqwzq.css';
import '../../css/c/ccbsimlpi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ydq7eqwzq"/><path class="ccbsimlpi"/></g>`,
		"fallback": "bi:shield-plus",
	});
}

export default Component;
