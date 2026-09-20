import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4uo-0s9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4uo-0s9d"/>`,
		"fallback": "pixelarticons:linkedin",
	});
}

export default Component;
