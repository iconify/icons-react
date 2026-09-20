import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxed9vmie.css';
import '../../css/w/wm44fabxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dxed9vmie"/><path class="wm44fabxa"/></g>`,
		"fallback": "solar:outgoing-call-rounded-outline",
	});
}

export default Component;
