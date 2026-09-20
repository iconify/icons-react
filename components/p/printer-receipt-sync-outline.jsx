import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4r088b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4r088b-v"/>`,
		"fallback": "mdi:printer-receipt-sync-outline",
	});
}

export default Component;
