import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n97kby4rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n97kby4rh"/>`,
		"fallback": "griddy-icons:timer-check-filled",
	});
}

export default Component;
