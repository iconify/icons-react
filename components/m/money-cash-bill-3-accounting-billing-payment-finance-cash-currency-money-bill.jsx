import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mkyzfxerg.css';
import '../../css/h/hig9m7vrv.css';
import '../../css/m/mq7-r4b0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="mkyzfxerg"/><circle class="hig9m7vrv"/><path class="mq7-r4b0b"/></g>`,
		"fallback": "streamline:money-cash-bill-3-accounting-billing-payment-finance-cash-currency-money-bill",
	});
}

export default Component;
