import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yfkgrtbcr.css';
import '../../css/y/yy4f622xk.css';
import '../../css/v/v8mmxpr7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yfkgrtbcr"/><path class="yy4f622xk"/><path class="v8mmxpr7o"/></g>`,
		"fallback": "streamline-freehand:modern-payment-self-checkout-touch",
	});
}

export default Component;
