import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr5v5lb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yr5v5lb7s"/>`,
		"fallback": "griddy-icons:terminal-square",
	});
}

export default Component;
