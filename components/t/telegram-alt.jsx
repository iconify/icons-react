import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4y3y7xtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4y3y7xtl"/>`,
		"fallback": "uil:telegram-alt",
	});
}

export default Component;
