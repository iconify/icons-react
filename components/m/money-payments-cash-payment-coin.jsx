import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5e5623cj.css';
import '../../css/f/fjjuhwb3o.css';
import '../../css/k/k17j4pb9z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5e5623cj"/><path class="fjjuhwb3o"/><path class="k17j4pb9z"/>`,
		"fallback": "streamline-pixel:money-payments-cash-payment-coin",
	});
}

export default Component;
