import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj0xs51-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj0xs51-s"/>`,
		"fallback": "boxicons:sun-rain-wind",
	});
}

export default Component;
