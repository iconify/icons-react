import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcgwv7b1e.css';
import '../../css/x/xjkzlbbry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcgwv7b1e"/><path class="xjkzlbbry"/>`,
		"fallback": "ion:ios-compass",
	});
}

export default Component;
