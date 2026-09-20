import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc5s19shd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc5s19shd"/>`,
		"fallback": "ri:lightbulb-flash-fill",
	});
}

export default Component;
