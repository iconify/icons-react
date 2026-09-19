import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye5tomb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye5tomb2d"/>`,
		"fallback": "boxicons:menu-notification-filled",
	});
}

export default Component;
