import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jta8ipbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jta8ipbkb"/>`,
		"fallback": "noviair-light:skip-back",
	});
}

export default Component;
