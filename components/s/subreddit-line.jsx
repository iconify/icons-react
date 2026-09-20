import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8j5efbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8j5efbwt"/>`,
		"fallback": "ri:subreddit-line",
	});
}

export default Component;
