import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vof1wyoxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vof1wyoxz"/>`,
		"fallback": "thesvg-color:lovart",
	});
}

export default Component;
