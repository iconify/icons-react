import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f-j-1jbhc.css';
import '../../css/k/knjqd7z0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f-j-1jbhc"/><path class="knjqd7z0p"/></g>`,
		"fallback": "streamline:shipping-warehouse-delivery-warehouse-shipping-fulfillment",
	});
}

export default Component;
