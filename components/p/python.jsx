import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te-hy03mo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te-hy03mo"/>`,
		"fallback": "la:python",
	});
}

export default Component;
