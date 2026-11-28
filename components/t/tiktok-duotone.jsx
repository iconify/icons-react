import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-hp4cc4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-hp4cc4q primary"/>`,
		"fallback": "iconaut:tiktok-duotone",
	});
}

export default Component;
