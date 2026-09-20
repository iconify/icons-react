import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsv_9ebej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsv_9ebej"/>`,
		"fallback": "ri:logout-circle-r-fill",
	});
}

export default Component;
