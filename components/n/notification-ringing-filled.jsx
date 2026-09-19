import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2ki8fuuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2ki8fuuc"/>`,
		"fallback": "griddy-icons:notification-ringing-filled",
	});
}

export default Component;
