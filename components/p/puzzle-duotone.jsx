import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1ez_g0zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary q1ez_g0zb"/>`,
		"fallback": "iconaut:puzzle-duotone",
	});
}

export default Component;
