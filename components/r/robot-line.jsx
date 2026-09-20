import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg346tbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg346tbpc"/>`,
		"fallback": "ri:robot-line",
	});
}

export default Component;
