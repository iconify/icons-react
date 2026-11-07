import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vheb2-beq.css';
import '../../css/u/ubakjmb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vheb2-beq"/><path clip-rule="evenodd" class="ubakjmb1l"/>`,
		"fallback": "solar:notification-unread-outline",
	});
}

export default Component;
