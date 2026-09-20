import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys2i7ybay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys2i7ybay"/>`,
		"fallback": "selfhst:powershell-universal",
	});
}

export default Component;
