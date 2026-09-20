import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sbjdo9b9c.css';
import '../../css/k/kp20a2que.css';
import '../../css/g/gwfb7koru.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sbjdo9b9c"/><path class="kp20a2que"/></g><path class="gwfb7koru"/>`,
		"fallback": "streamline:shopping-jewelry-gold-gold-money-payment-bars-finance-wealth-bullion",
	});
}

export default Component;
