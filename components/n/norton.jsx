import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbrk8cblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbrk8cblm"/>`,
		"fallback": "thesvg-color:norton",
	});
}

export default Component;
