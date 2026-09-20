import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkxkw_bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkxkw_bdw"/>`,
		"fallback": "mdi:message-reply-outline",
	});
}

export default Component;
