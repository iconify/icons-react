import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3q7pac3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3q7pac3c"/>`,
		"fallback": "iconoir:swipe-two-fingers-left-gesture",
	});
}

export default Component;
