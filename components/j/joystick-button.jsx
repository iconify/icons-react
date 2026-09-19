import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdh4qvbdd.css';
import '../../css/z/zb9ioj-fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdh4qvbdd"/><path class="zb9ioj-fp"/>`,
		"fallback": "boxicons:joystick-button",
	});
}

export default Component;
