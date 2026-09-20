import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d4__2oeqk.css';
import '../../css/x/xw3d96bat.css';
import '../../css/t/tik_qtb5w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="d4__2oeqk"/><circle class="xw3d96bat"/><path class="tik_qtb5w"/></g>`,
		"fallback": "streamline:money-cash-bill-1-billing-bills-payment-finance-cash-currency-money-accounting",
	});
}

export default Component;
