import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbwcpk9oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbwcpk9oi"/>`,
		"fallback": "mdi-light:message-video",
	});
}

export default Component;
