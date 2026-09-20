import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke40b1uoi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke40b1uoi"/>`,
		"fallback": "streamline-pixel:interface-essential-navigation-right-circle-1",
	});
}

export default Component;
