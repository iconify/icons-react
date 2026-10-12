import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqcidrb0g.css';
import '../../css/y/yf36usbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqcidrb0g"/><path class="yf36usbxu"/></g>`,
		"fallback": "andrsrxn:tent",
	});
}

export default Component;
