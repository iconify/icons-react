import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws61ilbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws61ilbvj"/>`,
		"fallback": "mynaui:location-snooze-solid",
	});
}

export default Component;
