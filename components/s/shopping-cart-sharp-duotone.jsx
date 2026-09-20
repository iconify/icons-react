import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/ryp3spl8y.css';
import '../../css/g/gu2s0cb7j.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ryp3spl8y"/><path class="gu2s0cb7j"/><path class="czbbm17fv"/></g>`,
		"fallback": "keyline-icons:shopping-cart-sharp-duotone",
	});
}

export default Component;
