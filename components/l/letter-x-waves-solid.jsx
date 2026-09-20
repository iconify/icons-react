import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cywaoh12c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cywaoh12c"/>`,
		"fallback": "mynaui:letter-x-waves-solid",
	});
}

export default Component;
