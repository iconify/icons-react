import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbre87eyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbre87eyo"/>`,
		"fallback": "ri:replay-15-line",
	});
}

export default Component;
