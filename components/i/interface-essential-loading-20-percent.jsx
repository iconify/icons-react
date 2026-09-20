import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6b6h-biy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6b6h-biy"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-20-percent",
	});
}

export default Component;
