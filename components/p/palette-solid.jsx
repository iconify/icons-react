import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu22fmb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qu22fmb1q"/>`,
		"fallback": "flowbite:palette-solid",
	});
}

export default Component;
