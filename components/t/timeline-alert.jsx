import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxek1-9tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxek1-9tk"/>`,
		"fallback": "mdi:timeline-alert",
	});
}

export default Component;
