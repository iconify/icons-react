import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ale7s0uzc.css';
import '../../css/j/jisbgab1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ale7s0uzc"/><path class="jisbgab1t"/></g>`,
		"fallback": "coolicons:shopping-basket-duotone-round",
	});
}

export default Component;
