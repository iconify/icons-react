import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flzyswj0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flzyswj0b"/>`,
		"fallback": "uil:okta",
	});
}

export default Component;
