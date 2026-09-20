import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we39k96wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we39k96wm"/>`,
		"fallback": "mynaui:letter-v-circle-solid",
	});
}

export default Component;
