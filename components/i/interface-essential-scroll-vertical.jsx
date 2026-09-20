import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t51f1fc8d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t51f1fc8d"/>`,
		"fallback": "streamline-pixel:interface-essential-scroll-vertical",
	});
}

export default Component;
