import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t8ulhkbic.css';
import '../../css/q/q8ehutbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t8ulhkbic"/><path class="primary q8ehutbwl"/></g>`,
		"fallback": "iconaut:satellite-dish-duotone",
	});
}

export default Component;
