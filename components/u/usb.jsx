import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sxzduxbhb.css';
import '../../css/l/l53l6wbno.css';
import '../../css/v/vpovynn1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sxzduxbhb wm-shadow"/><path class="l53l6wbno wm-shadow"/><path class="vpovynn1z"/></g>`,
		"fallback": "withicons-brutal:usb",
	});
}

export default Component;
