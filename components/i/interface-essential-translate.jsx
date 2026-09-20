import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obu62yb8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obu62yb8h"/>`,
		"fallback": "streamline-pixel:interface-essential-translate",
	});
}

export default Component;
