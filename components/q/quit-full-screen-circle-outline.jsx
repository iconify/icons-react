import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5y2qnprl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5y2qnprl"/>`,
		"fallback": "solar:quit-full-screen-circle-outline",
	});
}

export default Component;
