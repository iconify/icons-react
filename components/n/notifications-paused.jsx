import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzyz4ebqh.css';

const viewBox = {"width":368,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzyz4ebqh"/>`,
		"fallback": "zmdi:notifications-paused",
	});
}

export default Component;
