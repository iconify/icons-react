import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inc-f_bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="inc-f_bge"/>`,
		"fallback": "griddy-icons:ticket-off-alt",
	});
}

export default Component;
