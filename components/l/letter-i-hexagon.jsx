import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcemut8oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcemut8oi"/>`,
		"fallback": "mynaui:letter-i-hexagon",
	});
}

export default Component;
