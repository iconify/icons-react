import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w71pim13w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w71pim13w"/>`,
		"fallback": "ri:message-3-fill",
	});
}

export default Component;
