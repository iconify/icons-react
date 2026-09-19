import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xozmq__7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xozmq__7u"/>`,
		"fallback": "boxicons:joystick-button-filled",
	});
}

export default Component;
