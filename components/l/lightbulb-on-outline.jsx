import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lusdtq8gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lusdtq8gq"/>`,
		"fallback": "mdi:lightbulb-on-outline",
	});
}

export default Component;
