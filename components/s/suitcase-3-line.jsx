import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2c3ygb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2c3ygb8l"/>`,
		"fallback": "ri:suitcase-3-line",
	});
}

export default Component;
