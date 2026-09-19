import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-2g_-b-h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-2g_-b-h"/>`,
		"fallback": "whh:notificationtop",
	});
}

export default Component;
