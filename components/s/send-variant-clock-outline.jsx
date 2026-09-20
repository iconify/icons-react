import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rld3_rbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rld3_rbtv"/>`,
		"fallback": "mdi:send-variant-clock-outline",
	});
}

export default Component;
