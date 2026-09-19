import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-1yh6h8i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-1yh6h8i"/>`,
		"fallback": "fa7-brands:optin-monster",
	});
}

export default Component;
