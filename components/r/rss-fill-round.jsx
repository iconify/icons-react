import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkcjm9blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkcjm9blu"/>`,
		"fallback": "coolicons:rss-fill-round",
	});
}

export default Component;
