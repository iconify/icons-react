import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j04-771gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j04-771gm"/>`,
		"fallback": "tabler:timeline-event-plus",
	});
}

export default Component;
