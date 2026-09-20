import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzun-2b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzun-2b7e"/>`,
		"fallback": "mdi:receipt-text-check-outline",
	});
}

export default Component;
