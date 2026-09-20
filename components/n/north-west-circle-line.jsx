import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khq6usb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khq6usb3o"/>`,
		"fallback": "si:north-west-circle-line",
	});
}

export default Component;
