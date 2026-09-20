import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p13jm0box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p13jm0box"/>`,
		"fallback": "thesvg-color:matternet",
	});
}

export default Component;
