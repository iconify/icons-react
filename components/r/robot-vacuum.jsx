import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax68hvg5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax68hvg5v"/>`,
		"fallback": "mdi:robot-vacuum",
	});
}

export default Component;
