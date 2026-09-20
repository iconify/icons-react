import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxeu6zgvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxeu6zgvc"/>`,
		"fallback": "mdi:timeline-remove-outline",
	});
}

export default Component;
