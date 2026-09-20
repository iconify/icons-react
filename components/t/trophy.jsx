import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j39b2ub7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j39b2ub7l"/>`,
		"fallback": "pixelarticons:trophy",
	});
}

export default Component;
