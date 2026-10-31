import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_w62ealu.css';
import '../../css/q/qkl5g7bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h_w62ealu"/><path class="qkl5g7bmc"/></g>`,
		"fallback": "coolicons:shopping-cart-duotone-round",
	});
}

export default Component;
