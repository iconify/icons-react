import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh5b57bxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh5b57bxy"/>`,
		"fallback": "famicons:navigate-circle",
	});
}

export default Component;
