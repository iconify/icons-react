import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/aoal70b6v.css';
import '../../css/y/ycfh6nbib.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="aoal70b6v"/><path class="ycfh6nbib"/><path class="czbbm17fv"/></g>`,
		"fallback": "keyline-icons:shopping-cart-sharp-fill",
	});
}

export default Component;
