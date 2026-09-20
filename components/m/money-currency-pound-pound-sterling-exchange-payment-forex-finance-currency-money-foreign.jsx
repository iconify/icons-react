import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a827cubck.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a827cubck"/>`,
		"fallback": "streamline:money-currency-pound-pound-sterling-exchange-payment-forex-finance-currency-money-foreign",
	});
}

export default Component;
