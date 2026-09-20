import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qb_gf6_yn.css';
import '../../css/o/o5grrub_r.css';
import '../../css/u/uo71_4o2c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="qb_gf6_yn"/><circle class="o5grrub_r"/><path class="uo71_4o2c"/></g>`,
		"fallback": "streamline:money-cash-bill-2-currency-billing-payment-finance-cash-bill-money-accounting",
	});
}

export default Component;
