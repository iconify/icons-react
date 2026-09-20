import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j9ujp84gn.css';
import '../../css/v/vpx0usb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j9ujp84gn"/><path class="vpx0usb4d"/></g>`,
		"fallback": "keyline-icons:messages-square-duotone",
	});
}

export default Component;
