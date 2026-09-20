import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlmxcpbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlmxcpbwm"/>`,
		"fallback": "mynaui:letter-z-circle-solid",
	});
}

export default Component;
