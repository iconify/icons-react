import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv1i2gnkg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv1i2gnkg"/>`,
		"fallback": "streamline:money-currency-euro-exchange-payment-euro-forex-finance-currency-money-foreign",
	});
}

export default Component;
