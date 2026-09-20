import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-7r6lf6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-7r6lf6e"/>`,
		"fallback": "mdi:timer-edit-outline",
	});
}

export default Component;
