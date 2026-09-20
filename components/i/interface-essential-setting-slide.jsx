import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk4zobbyh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk4zobbyh"/>`,
		"fallback": "streamline-pixel:interface-essential-setting-slide",
	});
}

export default Component;
