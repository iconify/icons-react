import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz_z9ebew.css';
import '../../css/x/xbpxn1tjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uz_z9ebew"/><path class="xbpxn1tjj"/></g>`,
		"fallback": "hugeicons:pen-connect-usb",
	});
}

export default Component;
