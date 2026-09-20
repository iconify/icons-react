import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy8--92xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy8--92xl"/>`,
		"fallback": "si:thumb-down-line",
	});
}

export default Component;
