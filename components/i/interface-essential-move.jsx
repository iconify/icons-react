import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm7nx75dh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm7nx75dh"/>`,
		"fallback": "streamline-pixel:interface-essential-move",
	});
}

export default Component;
