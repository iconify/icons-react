import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yusenx73p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yusenx73p"/>`,
		"fallback": "mdi:message-settings-outline",
	});
}

export default Component;
