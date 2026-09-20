import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w62ongbbh.css';
import '../../css/k/k34k88bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w62ongbbh"/><path class="k34k88bhq"/></g>`,
		"fallback": "solar:square-arrow-left-bold-duotone",
	});
}

export default Component;
