import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ajy7dtmkz.css';
import '../../css/q/qmrj1h8ac.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="ajy7dtmkz"/><path class="qmrj1h8ac"/></g>`,
		"fallback": "streamline:money-atm-card-1-credit-pay-payment-debit-card-finance-plastic-money",
	});
}

export default Component;
