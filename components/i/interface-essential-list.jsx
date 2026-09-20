import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d82zkm3mx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d82zkm3mx"/>`,
		"fallback": "streamline-pixel:interface-essential-list",
	});
}

export default Component;
