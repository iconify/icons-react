import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgis7cprr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgis7cprr"/>`,
		"fallback": "guidance:up-angle-arrow",
	});
}

export default Component;
