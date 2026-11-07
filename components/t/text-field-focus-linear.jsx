import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wp-9pxbpn.css';
import '../../css/r/rmc1u9j4i.css';
import '../../css/o/om4lnzbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wp-9pxbpn"/><path class="rmc1u9j4i"/><path class="om4lnzbpu"/></g>`,
		"fallback": "solar:text-field-focus-linear",
	});
}

export default Component;
