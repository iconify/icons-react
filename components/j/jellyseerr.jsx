import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkb3lbbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkb3lbbgg"/>`,
		"fallback": "cbi:jellyseerr",
	});
}

export default Component;
