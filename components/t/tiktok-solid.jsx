import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra1hklkrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ra1hklkrz"/>`,
		"fallback": "iconoir:tiktok-solid",
	});
}

export default Component;
