import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5t413bgn.css';
import '../../css/o/oktelfbts.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5t413bgn"/><path class="oktelfbts"/>`,
		"fallback": "streamline-pixel:interface-essential-view-eye",
	});
}

export default Component;
