import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr941acet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr941acet"/>`,
		"fallback": "iconamoon:sign-plus",
	});
}

export default Component;
