import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou6xlkbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou6xlkbcd"/>`,
		"fallback": "ri:message-line",
	});
}

export default Component;
