import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9q138bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9q138bhs"/>`,
		"fallback": "hugeicons:tick-04",
	});
}

export default Component;
