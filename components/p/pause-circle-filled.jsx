import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9e34ux8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9e34ux8q"/>`,
		"fallback": "ci:pause-circle-filled",
	});
}

export default Component;
