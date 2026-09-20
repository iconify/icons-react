import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzy6q1jjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzy6q1jjd"/>`,
		"fallback": "ri:reddit-line",
	});
}

export default Component;
