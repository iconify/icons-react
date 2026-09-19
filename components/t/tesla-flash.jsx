import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghm6t940e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghm6t940e"/>`,
		"fallback": "cbi:tesla-flash",
	});
}

export default Component;
