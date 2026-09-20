import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idkbi6nqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idkbi6nqj"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-50-percent",
	});
}

export default Component;
