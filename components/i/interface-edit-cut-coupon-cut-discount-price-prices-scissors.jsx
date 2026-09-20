import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mq-8mk4cr.css';
import '../../css/s/spwcq9bsy.css';
import '../../css/k/k0otkhbbz.css';
import '../../css/y/yk299o1ob.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mq-8mk4cr"/><circle class="spwcq9bsy"/><path class="k0otkhbbz"/><circle class="yk299o1ob"/></g>`,
		"fallback": "streamline:interface-edit-cut-coupon-cut-discount-price-prices-scissors",
	});
}

export default Component;
