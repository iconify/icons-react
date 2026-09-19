import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycm4o3bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycm4o3bok"/>`,
		"fallback": "hugeicons:thought-bubble",
	});
}

export default Component;
