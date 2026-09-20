import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi5qpp_-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi5qpp_-h"/>`,
		"fallback": "mdi:middleware-outline",
	});
}

export default Component;
