import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy9zbe3mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jy9zbe3mj"/>`,
		"fallback": "lets-icons:ticket-alt-fill",
	});
}

export default Component;
