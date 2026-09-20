import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqix3_b1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqix3_b1y"/>`,
		"fallback": "ri:send-plane-line",
	});
}

export default Component;
