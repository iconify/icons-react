import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x0ik6kxpc.css';
import '../../css/m/miqf05kal.css';
import '../../css/r/r25emkbcf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x0ik6kxpc"/><rect class="miqf05kal"/><path class="r25emkbcf"/></g>`,
		"fallback": "streamline:money-bank-institution-money-saving-bank-payment-finance",
	});
}

export default Component;
