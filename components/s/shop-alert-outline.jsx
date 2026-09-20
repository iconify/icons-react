import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0nenab2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0nenab2h"/>`,
		"fallback": "mdi:shop-alert-outline",
	});
}

export default Component;
