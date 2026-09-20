import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrrckuble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrrckuble"/>`,
		"fallback": "streamline-ultimate:messages-people-person-bubble-circle-1",
	});
}

export default Component;
