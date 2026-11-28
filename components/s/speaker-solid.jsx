import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bar0usbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bar0usbee"/>`,
		"fallback": "iconaut:speaker-solid",
	});
}

export default Component;
