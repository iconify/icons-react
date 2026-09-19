import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcv3dlbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcv3dlbly"/>`,
		"fallback": "bxs:joystick",
	});
}

export default Component;
