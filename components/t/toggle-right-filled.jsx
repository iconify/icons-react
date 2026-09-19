import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo1q0dvgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo1q0dvgo"/>`,
		"fallback": "boxicons:toggle-right-filled",
	});
}

export default Component;
