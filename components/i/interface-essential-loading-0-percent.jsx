import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi-r0bcdd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi-r0bcdd"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-0-percent",
	});
}

export default Component;
