import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd6828d5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qd6828d5v"/>`,
		"fallback": "lets-icons:send-light",
	});
}

export default Component;
