import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c35hgrb9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c35hgrb9u"/>`,
		"fallback": "streamline-pixel:interface-essential-scroll-horizontal",
	});
}

export default Component;
