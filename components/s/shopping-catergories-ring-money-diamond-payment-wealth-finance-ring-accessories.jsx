import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e5b44oc4i.css';
import '../../css/o/om27ejy1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="e5b44oc4i"/><path class="om27ejy1p"/></g>`,
		"fallback": "streamline:shopping-catergories-ring-money-diamond-payment-wealth-finance-ring-accessories",
	});
}

export default Component;
