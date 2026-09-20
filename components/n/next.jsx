import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8bp7dbia.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8bp7dbia"/>`,
		"fallback": "wpf:next",
	});
}

export default Component;
