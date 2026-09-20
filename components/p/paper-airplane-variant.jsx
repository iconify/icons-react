import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywt1lbbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywt1lbbal"/>`,
		"fallback": "mdi:paper-airplane-variant",
	});
}

export default Component;
