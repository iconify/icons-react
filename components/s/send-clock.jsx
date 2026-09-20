import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtxo59byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtxo59byw"/>`,
		"fallback": "mdi:send-clock",
	});
}

export default Component;
