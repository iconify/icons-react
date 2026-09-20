import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdazkl9at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdazkl9at"/>`,
		"fallback": "mdi:train-car-autorack",
	});
}

export default Component;
