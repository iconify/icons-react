import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj2dx1b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj2dx1b3v"/>`,
		"fallback": "cbi:lg-oled55",
	});
}

export default Component;
