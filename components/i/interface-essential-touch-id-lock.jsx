import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1lqv4b4w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1lqv4b4w"/>`,
		"fallback": "streamline-pixel:interface-essential-touch-id-lock",
	});
}

export default Component;
