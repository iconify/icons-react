import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dns_7678t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dns_7678t"/>`,
		"fallback": "mdi:timeline-clock",
	});
}

export default Component;
