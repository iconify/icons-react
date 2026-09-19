import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7lj2v1ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7lj2v1ps"/>`,
		"fallback": "feather:volume-2",
	});
}

export default Component;
