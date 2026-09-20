import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fngp-acaw.css';
import '../../css/m/mh0xefbit.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fngp-acaw"/><path class="mh0xefbit"/></g>`,
		"fallback": "streamline:money-cash-bag-dollar-bag-payment-cash-money-finance",
	});
}

export default Component;
