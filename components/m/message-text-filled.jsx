import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x990d3bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x990d3bzi"/>`,
		"fallback": "reicon:message-text-filled",
	});
}

export default Component;
