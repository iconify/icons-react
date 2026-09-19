import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p467u_usb.css';
import '../../css/r/raqdz2mxm.css';
import '../../css/r/rha2efbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p467u_usb"/><rect class="raqdz2mxm"/><rect class="rha2efbwh"/>`,
		"fallback": "boxicons:thread-roll-filled",
	});
}

export default Component;
