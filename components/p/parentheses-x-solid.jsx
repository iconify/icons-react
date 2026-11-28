import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6hj85b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6hj85b4h"/>`,
		"fallback": "iconaut:parentheses-x-solid",
	});
}

export default Component;
