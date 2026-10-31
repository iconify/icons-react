import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs7dp88vp.css';
import '../../css/h/hoi9c7gee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fs7dp88vp"/><path class="hoi9c7gee"/></g>`,
		"fallback": "coolicons:piggy-bank-bulk-round",
	});
}

export default Component;
