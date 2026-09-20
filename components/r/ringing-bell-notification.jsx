import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed7qj1bbp.css';
import '../../css/w/wtpnv6bbu.css';
import '../../css/u/uhhpntgek.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ed7qj1bbp"/><path class="wtpnv6bbu"/><path class="uhhpntgek"/></g>`,
		"fallback": "streamline-color:ringing-bell-notification",
	});
}

export default Component;
