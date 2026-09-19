import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp3y-jbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp3y-jbcu"/>`,
		"fallback": "hugeicons:list-indent-decrease",
	});
}

export default Component;
