import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz0usb8zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz0usb8zj"/>`,
		"fallback": "streamline-logos:openai-logo",
	});
}

export default Component;
