import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9jsdsb8y.css';
import '../../css/a/a59r3ek-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w9jsdsb8y"/><path clip-rule="evenodd" class="a59r3ek-x"/></g>`,
		"fallback": "pepicons-pencil:list",
	});
}

export default Component;
