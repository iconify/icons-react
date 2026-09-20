import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifuftsm3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifuftsm3k"/>`,
		"fallback": "mdi:sim-off-outline",
	});
}

export default Component;
