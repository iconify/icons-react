import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v83lsdbwe.css';
import '../../css/u/unbz9_wwg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v83lsdbwe"/><path class="unbz9_wwg"/></g>`,
		"fallback": "bi:piggy-bank",
	});
}

export default Component;
