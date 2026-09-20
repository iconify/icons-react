import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hook1kb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hook1kb1m"/>`,
		"fallback": "mdi:message-cog-outline",
	});
}

export default Component;
