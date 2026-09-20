import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne225fbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ne225fbpx"/>`,
		"fallback": "mingcute:usb-fill",
	});
}

export default Component;
