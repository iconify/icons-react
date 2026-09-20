import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vczk4db9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vczk4db9t"/>`,
		"fallback": "ri:message-3-line",
	});
}

export default Component;
