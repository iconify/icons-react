import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uutjnz7et.css';
import '../../css/n/nzrdnbbig.css';
import '../../css/k/k0ewegeoy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uutjnz7et"/><rect class="nzrdnbbig"/><path class="k0ewegeoy"/></g>`,
		"fallback": "streamline:money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine",
	});
}

export default Component;
