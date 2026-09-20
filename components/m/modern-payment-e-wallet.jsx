import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k1_ou3a9i.css';
import '../../css/e/ea89hsbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k1_ou3a9i"/><path class="ea89hsbyo"/></g>`,
		"fallback": "streamline-freehand-color:modern-payment-e-wallet",
	});
}

export default Component;
