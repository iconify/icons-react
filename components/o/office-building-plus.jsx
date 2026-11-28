import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii3yt_r-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii3yt_r-y"/>`,
		"fallback": "noviair-light:office-building-plus",
	});
}

export default Component;
