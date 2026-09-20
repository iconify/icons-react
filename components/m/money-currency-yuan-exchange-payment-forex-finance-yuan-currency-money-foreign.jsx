import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8rkslb8y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8rkslb8y"/>`,
		"fallback": "streamline:money-currency-yuan-exchange-payment-forex-finance-yuan-currency-money-foreign",
	});
}

export default Component;
