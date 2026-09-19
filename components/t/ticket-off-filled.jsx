import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhfhjyejn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhfhjyejn"/>`,
		"fallback": "griddy-icons:ticket-off-filled",
	});
}

export default Component;
