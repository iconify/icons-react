import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwzo7wbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwzo7wbpd"/>`,
		"fallback": "mynaui:message-dots-solid",
	});
}

export default Component;
