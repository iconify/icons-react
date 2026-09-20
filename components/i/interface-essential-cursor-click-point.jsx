import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y94hyzjei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y94hyzjei"/>`,
		"fallback": "streamline-pixel:interface-essential-cursor-click-point",
	});
}

export default Component;
