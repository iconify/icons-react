import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/smqt6p0-g.css';
import '../../css/e/eubza2fut.css';
import '../../css/o/o5grrub_r.css';
import '../../css/l/lw7godbbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="smqt6p0-g"/><rect class="eubza2fut"/><circle class="o5grrub_r"/><path class="lw7godbbw"/></g>`,
		"fallback": "streamline:money-atm-card-2-deposit-money-payment-finance-atm-withdraw",
	});
}

export default Component;
