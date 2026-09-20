import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt7g0ubvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jt7g0ubvh"/>`,
		"fallback": "solar:soundwave-circle-bold",
	});
}

export default Component;
