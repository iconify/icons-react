import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1v0-0b8q.css';
import '../../css/w/wlj0jptgl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1v0-0b8q"/><path class="wlj0jptgl"/>`,
		"fallback": "streamline-pixel:interface-essential-call-center-contact-help",
	});
}

export default Component;
