import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybec0eb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ybec0eb3m"/>`,
		"fallback": "solar:unread-bold",
	});
}

export default Component;
