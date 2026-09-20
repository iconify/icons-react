import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll91ww2cn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll91ww2cn"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-80-percent",
	});
}

export default Component;
