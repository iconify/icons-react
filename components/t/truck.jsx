import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc1e_-bzf.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc1e_-bzf"/>`,
		"fallback": "fontisto:truck",
	});
}

export default Component;
