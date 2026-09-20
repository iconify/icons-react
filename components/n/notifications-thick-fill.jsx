import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keux-obrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keux-obrf"/>`,
		"fallback": "si:notifications-thick-fill",
	});
}

export default Component;
