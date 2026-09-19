import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km1rssb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km1rssb9l"/>`,
		"fallback": "healthicons:overweight-24px",
	});
}

export default Component;
