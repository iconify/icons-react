import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq0i8qkjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq0i8qkjo"/>`,
		"fallback": "bxs:lock",
	});
}

export default Component;
