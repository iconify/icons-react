import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3_7o7bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3_7o7bgf"/>`,
		"fallback": "mdi:triangle-down-outline",
	});
}

export default Component;
