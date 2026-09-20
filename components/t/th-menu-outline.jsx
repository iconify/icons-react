import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apgf6wjmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apgf6wjmi"/>`,
		"fallback": "typcn:th-menu-outline",
	});
}

export default Component;
