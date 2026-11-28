import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fci3g6brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fci3g6brk"/>`,
		"fallback": "noviair-light:square-arrow-right",
	});
}

export default Component;
