import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y81x1pbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y81x1pbuw"/>`,
		"fallback": "ri:ram-fill",
	});
}

export default Component;
