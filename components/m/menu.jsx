import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j03h574ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j03h574ok"/>`,
		"fallback": "griddy-icons:menu",
	});
}

export default Component;
