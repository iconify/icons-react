import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp1w73bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp1w73bvu"/>`,
		"fallback": "mdi:map-clock-outline",
	});
}

export default Component;
