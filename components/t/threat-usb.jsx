import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np13ghb2z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np13ghb2z"/>`,
		"fallback": "streamline-flex:threat-usb",
	});
}

export default Component;
