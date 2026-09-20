import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t_gk6_b7r.css';
import '../../css/x/xcv6q1bnv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t_gk6_b7r"/><circle class="xcv6q1bnv"/></g>`,
		"fallback": "streamline:money-cash-dollar-coin-accounting-billing-payment-cash-coin-currency-money-finance",
	});
}

export default Component;
