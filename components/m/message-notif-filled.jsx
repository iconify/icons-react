import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/luyvssboz.css';
import '../../css/j/j7ynr9b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="luyvssboz"/><path class="j7ynr9b4c"/></g>`,
		"fallback": "reicon:message-notif-filled",
	});
}

export default Component;
