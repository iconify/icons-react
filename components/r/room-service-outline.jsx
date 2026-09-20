import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys-mqb6ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys-mqb6ws"/>`,
		"fallback": "mdi:room-service-outline",
	});
}

export default Component;
