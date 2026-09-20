import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhn8o8b-g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uhn8o8b-g"/>`,
		"fallback": "streamline-flex:notification-alarm-snooze-solid",
	});
}

export default Component;
