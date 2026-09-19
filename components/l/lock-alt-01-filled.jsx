import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h94enslwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h94enslwm"/>`,
		"fallback": "griddy-icons:lock-alt-01-filled",
	});
}

export default Component;
