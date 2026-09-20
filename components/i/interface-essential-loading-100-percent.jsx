import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfyy9pk0i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfyy9pk0i"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-100-percent",
	});
}

export default Component;
