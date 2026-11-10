import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/raijdkbtr.css';
import '../../css/q/qr8_5sb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="raijdkbtr"/><path class="qr8_5sb8k"/></g>`,
		"fallback": "andrsrxn:metro",
	});
}

export default Component;
