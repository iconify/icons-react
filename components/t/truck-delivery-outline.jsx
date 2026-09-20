import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ren4p7bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ren4p7bzl"/>`,
		"fallback": "mdi:truck-delivery-outline",
	});
}

export default Component;
