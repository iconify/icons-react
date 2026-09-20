import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rec4skbba.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rec4skbba"/>`,
		"fallback": "streamline-pixel:interface-essential-sound",
	});
}

export default Component;
