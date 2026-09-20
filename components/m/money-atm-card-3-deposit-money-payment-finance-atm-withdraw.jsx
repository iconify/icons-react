import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p8gs2je5m.css';
import '../../css/k/k2yj1cc6l.css';
import '../../css/m/mll-n19-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="p8gs2je5m"/><path class="k2yj1cc6l"/><circle class="mll-n19-s"/></g>`,
		"fallback": "streamline:money-atm-card-3-deposit-money-payment-finance-atm-withdraw",
	});
}

export default Component;
