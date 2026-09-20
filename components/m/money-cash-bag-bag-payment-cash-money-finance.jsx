import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orng1hbvb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orng1hbvb"/>`,
		"fallback": "streamline:money-cash-bag-bag-payment-cash-money-finance",
	});
}

export default Component;
