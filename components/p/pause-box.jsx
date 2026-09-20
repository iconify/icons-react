import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wod6j874l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wod6j874l"/>`,
		"fallback": "mdi:pause-box",
	});
}

export default Component;
