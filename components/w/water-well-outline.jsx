import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2h65pwta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2h65pwta"/>`,
		"fallback": "mdi:water-well-outline",
	});
}

export default Component;
