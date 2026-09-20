import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gbeqjcbfp.css';
import '../../css/i/i6432t0ri.css';
import '../../css/w/wgzy--bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gbeqjcbfp"/><path class="i6432t0ri"/><path class="wgzy--bjh"/></g>`,
		"fallback": "streamline-freehand-color:modern-payment-desktop-transaction",
	});
}

export default Component;
