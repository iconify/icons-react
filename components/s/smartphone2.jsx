import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xxq9s8eib.css';
import '../../css/j/jk5q43b5z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xxq9s8eib"/><path class="jk5q43b5z"/></g>`,
		"fallback": "pepicons:smartphone2",
	});
}

export default Component;
