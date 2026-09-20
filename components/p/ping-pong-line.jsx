import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8c9_rbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8c9_rbmm"/>`,
		"fallback": "ri:ping-pong-line",
	});
}

export default Component;
