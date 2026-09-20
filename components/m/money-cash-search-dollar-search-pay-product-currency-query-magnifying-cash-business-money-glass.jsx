import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fu9oxcclp.css';
import '../../css/p/p712fqfhm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="fu9oxcclp"/><path class="p712fqfhm"/></g>`,
		"fallback": "streamline:money-cash-search-dollar-search-pay-product-currency-query-magnifying-cash-business-money-glass",
	});
}

export default Component;
