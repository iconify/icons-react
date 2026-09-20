import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_fjkwp3q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_fjkwp3q"/>`,
		"fallback": "streamline:ringing-bell-notification-remix",
	});
}

export default Component;
