import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7wl2l2ca.css';
import '../../css/r/rh4jo1b5o.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t7wl2l2ca"/><path class="rh4jo1b5o"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`,
		"fallback": "solar:text-underline-circle-outline",
	});
}

export default Component;
