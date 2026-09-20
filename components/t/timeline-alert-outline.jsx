import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp96po1hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp96po1hv"/>`,
		"fallback": "mdi:timeline-alert-outline",
	});
}

export default Component;
