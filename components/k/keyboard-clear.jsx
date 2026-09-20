import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gptt6rb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gptt6rb-w"/>`,
		"fallback": "mdi:keyboard-clear",
	});
}

export default Component;
