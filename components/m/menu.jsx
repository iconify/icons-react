import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwh8snbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwh8snbkb"/>`,
		"fallback": "struq:menu",
	});
}

export default Component;
