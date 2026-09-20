import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq4li-2nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq4li-2nf"/>`,
		"fallback": "mynaui:message-plus",
	});
}

export default Component;
