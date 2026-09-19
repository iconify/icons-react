import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctcl7tbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctcl7tbay"/>`,
		"fallback": "ci:menu-duo-lg",
	});
}

export default Component;
