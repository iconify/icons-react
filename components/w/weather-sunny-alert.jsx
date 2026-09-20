import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjxe0hbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjxe0hbqx"/>`,
		"fallback": "mdi:weather-sunny-alert",
	});
}

export default Component;
