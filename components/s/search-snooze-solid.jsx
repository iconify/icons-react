import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb0box43i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb0box43i"/>`,
		"fallback": "mynaui:search-snooze-solid",
	});
}

export default Component;
