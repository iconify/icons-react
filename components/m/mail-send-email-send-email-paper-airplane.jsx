import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtvj1dvjh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtvj1dvjh"/>`,
		"fallback": "streamline:mail-send-email-send-email-paper-airplane",
	});
}

export default Component;
