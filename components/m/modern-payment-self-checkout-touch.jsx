import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/in2n-m-tn.css';
import '../../css/x/xz1mt0bfe.css';
import '../../css/f/fn51gwbqa.css';
import '../../css/d/dxfe2ng1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="in2n-m-tn"/><path class="xz1mt0bfe"/><path class="fn51gwbqa"/><path class="dxfe2ng1m"/></g>`,
		"fallback": "streamline-freehand-color:modern-payment-self-checkout-touch",
	});
}

export default Component;
