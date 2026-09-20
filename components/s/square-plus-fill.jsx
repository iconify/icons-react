import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arl4wwv7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="arl4wwv7k"/>`,
		"fallback": "keyline-icons:square-plus-fill",
	});
}

export default Component;
