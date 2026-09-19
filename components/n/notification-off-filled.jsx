import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4a9j8b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f4a9j8b8f"/>`,
		"fallback": "griddy-icons:notification-off-filled",
	});
}

export default Component;
