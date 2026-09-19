import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8sacuuou.css';
import '../../css/y/yusbh7bbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8sacuuou"/><path class="yusbh7bbp"/>`,
		"fallback": "famicons:logo-paypal",
	});
}

export default Component;
