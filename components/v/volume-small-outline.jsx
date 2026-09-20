import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uqj23rb0c.css';
import '../../css/f/fcm4zbckh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uqj23rb0c"/><path class="fcm4zbckh"/></g>`,
		"fallback": "solar:volume-small-outline",
	});
}

export default Component;
