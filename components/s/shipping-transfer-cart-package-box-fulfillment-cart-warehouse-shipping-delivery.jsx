import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efp59t_7a.css';
import '../../css/b/bkpj8-bdl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="efp59t_7a"/><path class="bkpj8-bdl"/></g>`,
		"fallback": "streamline:shipping-transfer-cart-package-box-fulfillment-cart-warehouse-shipping-delivery",
	});
}

export default Component;
