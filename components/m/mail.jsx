import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyv8m4uoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyv8m4uoe"/>`,
		"fallback": "keyline-icons:mail",
	});
}

export default Component;
