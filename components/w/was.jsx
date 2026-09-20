import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp2sc6bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp2sc6bbu"/>`,
		"fallback": "token:was",
	});
}

export default Component;
