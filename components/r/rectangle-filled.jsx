import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7-ce83dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="j7-ce83dk"/>`,
		"fallback": "boxicons:rectangle-filled",
	});
}

export default Component;
