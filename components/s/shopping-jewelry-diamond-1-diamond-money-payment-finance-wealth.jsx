import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dtbtte0ck.css';
import '../../css/q/qmecv8s9c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dtbtte0ck"/><path class="qmecv8s9c"/></g>`,
		"fallback": "streamline:shopping-jewelry-diamond-1-diamond-money-payment-finance-wealth",
	});
}

export default Component;
