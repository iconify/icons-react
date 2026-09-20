import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6u9q2rkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6u9q2rkt"/>`,
		"fallback": "streamline-pixel:money-payments-currency-euro-dollar-exchange",
	});
}

export default Component;
