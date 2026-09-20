import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wci_15r8c.css';
import '../../css/h/hx5vlr8-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wci_15r8c"/><path class="hx5vlr8-m"/></g>`,
		"fallback": "solar:shop-minimalistic-bold",
	});
}

export default Component;
