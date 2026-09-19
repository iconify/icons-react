import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejpz3s0yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejpz3s0yd"/>`,
		"fallback": "boxicons:plus-big-filled",
	});
}

export default Component;
