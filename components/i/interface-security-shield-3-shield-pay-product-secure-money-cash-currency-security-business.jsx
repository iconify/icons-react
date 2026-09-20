import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w35pyk64g.css';
import '../../css/f/fvpp4jbup.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w35pyk64g"/><path class="fvpp4jbup"/></g>`,
		"fallback": "streamline:interface-security-shield-3-shield-pay-product-secure-money-cash-currency-security-business",
	});
}

export default Component;
