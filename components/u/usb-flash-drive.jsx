import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4er2kb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4er2kb1c"/>`,
		"fallback": "mdi:usb-flash-drive",
	});
}

export default Component;
