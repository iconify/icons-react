import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw43jv51r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw43jv51r"/>`,
		"fallback": "boxicons:right-indent",
	});
}

export default Component;
