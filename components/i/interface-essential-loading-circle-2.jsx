import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3c-7tb6h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3c-7tb6h"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-circle-2",
	});
}

export default Component;
