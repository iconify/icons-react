import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m_k3-2btc.css';
import '../../css/q/qmi-9ccus.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="m_k3-2btc"/><path class="qmi-9ccus"/></g>`,
		"fallback": "streamline:travel-hotel-parking-sign-discount-coupon-parking-price-prices",
	});
}

export default Component;
