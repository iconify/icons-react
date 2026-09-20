import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfa5dkboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfa5dkboe"/>`,
		"fallback": "ri:vip-line",
	});
}

export default Component;
