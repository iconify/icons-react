import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7ioqnsvx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7ioqnsvx"/>`,
		"fallback": "streamline-pixel:map-navigation-location-focus",
	});
}

export default Component;
