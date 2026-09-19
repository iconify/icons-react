import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9aio8bfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9aio8bfi"/>`,
		"fallback": "guidance:no-pictures",
	});
}

export default Component;
