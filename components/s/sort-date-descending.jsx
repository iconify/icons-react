import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt7ejub1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt7ejub1l"/>`,
		"fallback": "mdi:sort-date-descending",
	});
}

export default Component;
