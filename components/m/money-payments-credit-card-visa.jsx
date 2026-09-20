import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxxx8-_sp.css';
import '../../css/h/hp5jyobim.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxxx8-_sp"/><path class="hp5jyobim"/>`,
		"fallback": "streamline-pixel:money-payments-credit-card-visa",
	});
}

export default Component;
