import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytpee3b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytpee3b2u"/>`,
		"fallback": "thesvg-color:numba",
	});
}

export default Component;
