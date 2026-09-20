import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqd5ycvcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqd5ycvcp"/>`,
		"fallback": "mdi:train-car-container",
	});
}

export default Component;
