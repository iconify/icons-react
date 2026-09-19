import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0srflb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v0srflb8o"/>`,
		"fallback": "griddy-icons:sim-card",
	});
}

export default Component;
