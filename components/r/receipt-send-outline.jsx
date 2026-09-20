import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjxy9soza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjxy9soza"/>`,
		"fallback": "mdi:receipt-send-outline",
	});
}

export default Component;
