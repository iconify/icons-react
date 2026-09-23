import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vt6hcub9p.css';
import '../../css/z/zgknwabmn.css';
import '../../css/k/kvwkwfbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vt6hcub9p"/><path class="zgknwabmn"/><path class="kvwkwfbtt"/></g>`,
		"fallback": "keyline-icons:shopping-cart-sparkles-sharp-duotone",
	});
}

export default Component;
