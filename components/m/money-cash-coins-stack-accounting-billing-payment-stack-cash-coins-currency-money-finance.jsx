import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eajz1t1tw.css';
import '../../css/n/nogaozbzm.css';
import '../../css/y/yjnrbbbfw.css';
import '../../css/a/aslq4fbgw.css';
import '../../css/w/wiapkjbwf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><ellipse class="eajz1t1tw"/><path class="nogaozbzm"/><path class="yjnrbbbfw"/><path class="aslq4fbgw"/><path class="wiapkjbwf"/></g>`,
		"fallback": "streamline:money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance",
	});
}

export default Component;
