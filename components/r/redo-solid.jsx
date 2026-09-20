import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upje9sbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upje9sbah"/>`,
		"fallback": "mynaui:redo-solid",
	});
}

export default Component;
