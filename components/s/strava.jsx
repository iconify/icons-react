import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td206m08z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td206m08z"/>`,
		"fallback": "mdi:strava",
	});
}

export default Component;
