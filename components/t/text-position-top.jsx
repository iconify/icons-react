import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uttz4dh8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uttz4dh8k"/>`,
		"fallback": "proicons:text-position-top",
	});
}

export default Component;
