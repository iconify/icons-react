import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yowfujb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yowfujb9o"/>`,
		"fallback": "cbi:panel-door-locked",
	});
}

export default Component;
