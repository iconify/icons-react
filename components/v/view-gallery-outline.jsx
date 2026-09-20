import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mad0qzn3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mad0qzn3t"/>`,
		"fallback": "mdi:view-gallery-outline",
	});
}

export default Component;
