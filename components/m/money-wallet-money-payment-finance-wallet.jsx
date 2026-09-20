import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gc342bcxg.css';
import '../../css/s/s27uf50fr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gc342bcxg"/><rect class="s27uf50fr"/></g>`,
		"fallback": "streamline:money-wallet-money-payment-finance-wallet",
	});
}

export default Component;
