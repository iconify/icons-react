import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nze6iabmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nze6iabmy"/>`,
		"fallback": "simple-icons:w3c",
	});
}

export default Component;
