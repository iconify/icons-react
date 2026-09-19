import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q-co8vbgs.css';
import '../../css/p/pwd4r5zie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q-co8vbgs"/><path class="pwd4r5zie"/></g>`,
		"fallback": "iconamoon:ticket-duotone",
	});
}

export default Component;
