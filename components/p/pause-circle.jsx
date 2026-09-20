import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-a3qkb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-a3qkb8k"/>`,
		"fallback": "uil:pause-circle",
	});
}

export default Component;
