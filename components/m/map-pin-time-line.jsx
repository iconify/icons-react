import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta3ahwb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta3ahwb6q"/>`,
		"fallback": "ri:map-pin-time-line",
	});
}

export default Component;
