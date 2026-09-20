import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndq79cc0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndq79cc0t"/>`,
		"fallback": "mdi:view-week-outline",
	});
}

export default Component;
