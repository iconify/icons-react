import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wimns_bar.css';
import '../../css/p/pcnc85bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wimns_bar"/><path class="pcnc85bai"/></g>`,
		"fallback": "coolicons:usb-duotone-round",
	});
}

export default Component;
