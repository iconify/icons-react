import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cahgih0ph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cahgih0ph"/>`,
		"fallback": "griddy-icons:users-filled",
	});
}

export default Component;
