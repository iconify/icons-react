import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyx6_8qkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyx6_8qkk"/>`,
		"fallback": "iconoir:pen-connect-wifi",
	});
}

export default Component;
