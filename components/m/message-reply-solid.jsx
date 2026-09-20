import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xytuqx64a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xytuqx64a"/>`,
		"fallback": "mynaui:message-reply-solid",
	});
}

export default Component;
