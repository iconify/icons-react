import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x_z3bwv4t.css';
import '../../css/w/wttawfb0l.css';
import '../../css/z/z5_656mud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x_z3bwv4t"/><path class="wttawfb0l"/><path class="z5_656mud"/></g>`,
		"fallback": "hugeicons:tablet-connected-usb",
	});
}

export default Component;
