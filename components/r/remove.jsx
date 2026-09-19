import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu8eogszi.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu8eogszi"/>`,
		"fallback": "ls:remove",
	});
}

export default Component;
