import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co7ecyb6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co7ecyb6v"/>`,
		"fallback": "streamline-pixel:interface-essential-heart-favorite",
	});
}

export default Component;
