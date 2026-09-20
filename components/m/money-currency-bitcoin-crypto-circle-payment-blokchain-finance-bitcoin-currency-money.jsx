import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itinflbxa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itinflbxa"/>`,
		"fallback": "streamline:money-currency-bitcoin-crypto-circle-payment-blokchain-finance-bitcoin-currency-money",
	});
}

export default Component;
