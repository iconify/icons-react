import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llgy7otxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llgy7otxe"/>`,
		"fallback": "eva:star-fill",
	});
}

export default Component;
