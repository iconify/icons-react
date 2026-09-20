import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q574zqbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q574zqbqp"/>`,
		"fallback": "mdi:usb-port",
	});
}

export default Component;
