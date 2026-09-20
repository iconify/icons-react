import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxjoesbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxjoesbof"/>`,
		"fallback": "keyline-icons:truck-plus",
	});
}

export default Component;
