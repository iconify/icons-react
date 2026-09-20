import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oys3y2b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oys3y2b6z"/>`,
		"fallback": "tabler:sun-low-filled",
	});
}

export default Component;
