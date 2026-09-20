import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mvd1m8bez.css';
import '../../css/q/qjykfwbex.css';
import '../../css/n/npm16tm7n.css';
import '../../css/n/nsefvcihq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mvd1m8bez"/><path class="qjykfwbex"/><path class="npm16tm7n"/><path class="nsefvcihq"/></g>`,
		"fallback": "streamline-freehand-color:modern-payment-qr-basket",
	});
}

export default Component;
