import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu271i46h.css';

const viewBox = {"width":24,"height":24,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu271i46h"/>`,
		"fallback": "jam:tags-f",
	});
}

export default Component;
