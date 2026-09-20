import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2-vgtb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2-vgtb4u"/>`,
		"fallback": "thesvg-color:simple-analytics",
	});
}

export default Component;
