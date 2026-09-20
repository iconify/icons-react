import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh85sebgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh85sebgm"/>`,
		"fallback": "mdi:phone-in-talk",
	});
}

export default Component;
