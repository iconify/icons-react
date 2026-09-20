import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3r3qrb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3r3qrb5e"/>`,
		"fallback": "mdi:printer-point-of-sale-stop-outline",
	});
}

export default Component;
