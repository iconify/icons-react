import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6-tw7fdl.css';
import '../../css/u/u57zsmbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6-tw7fdl"/><path class="u57zsmbkl"/>`,
		"fallback": "solar:ticket-outline",
	});
}

export default Component;
