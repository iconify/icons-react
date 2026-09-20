import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mt5h25b2g.css';
import '../../css/j/j09m7hbuu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mt5h25b2g"/><path class="j09m7hbuu"/></g>`,
		"fallback": "streamline:travel-places-diamond-diamond-money-payment-finance-wealth",
	});
}

export default Component;
