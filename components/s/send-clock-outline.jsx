import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgxoh_b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgxoh_b3g"/>`,
		"fallback": "mdi:send-clock-outline",
	});
}

export default Component;
