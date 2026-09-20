import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xixbvxbcd.css';
import '../../css/s/sboz3ieoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xixbvxbcd"/><path class="sboz3ieoj"/>`,
		"fallback": "streamline-ultimate:sd-card-download-bold",
	});
}

export default Component;
