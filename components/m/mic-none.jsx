import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx0dswoqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx0dswoqc"/>`,
		"fallback": "mdi:mic-none",
	});
}

export default Component;
