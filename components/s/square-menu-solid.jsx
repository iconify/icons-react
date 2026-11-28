import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unhi2lbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unhi2lbnb"/>`,
		"fallback": "iconaut:square-menu-solid",
	});
}

export default Component;
