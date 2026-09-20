import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5mmv-bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5mmv-bia"/>`,
		"fallback": "mdi:lightbulb-gu10",
	});
}

export default Component;
