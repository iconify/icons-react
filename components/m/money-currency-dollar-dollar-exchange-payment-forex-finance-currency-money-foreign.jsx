import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0dsanjek.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0dsanjek"/>`,
		"fallback": "streamline:money-currency-dollar-dollar-exchange-payment-forex-finance-currency-money-foreign",
	});
}

export default Component;
