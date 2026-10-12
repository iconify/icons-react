import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjxjirbwm.css';
import '../../css/t/tiopm5b9e.css';
import '../../css/w/wztl8_byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mjxjirbwm"/><path class="tiopm5b9e"/><path class="wztl8_byv"/></g>`,
		"fallback": "andrsrxn:squiggles-sparkle",
	});
}

export default Component;
