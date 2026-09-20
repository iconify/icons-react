import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4i0jpbcr.css';
import '../../css/w/w5v8e733c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4i0jpbcr"/><path class="w5v8e733c"/>`,
		"fallback": "streamline-pixel:interface-essential-stat",
	});
}

export default Component;
