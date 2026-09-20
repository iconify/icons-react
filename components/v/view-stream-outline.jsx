import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwa6k3roj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwa6k3roj"/>`,
		"fallback": "mdi:view-stream-outline",
	});
}

export default Component;
