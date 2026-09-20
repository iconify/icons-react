import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j_gf21bvo.css';
import '../../css/g/g2if8wbjy.css';
import '../../css/q/q7xbp4b8r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j_gf21bvo"/><circle class="g2if8wbjy"/><circle class="q7xbp4b8r"/></g>`,
		"fallback": "streamline:shopping-cart-1-shopping-cart-checkout",
	});
}

export default Component;
