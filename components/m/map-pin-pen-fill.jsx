import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol0zcy-5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol0zcy-5v"/>`,
		"fallback": "mingcute:map-pin-pen-fill",
	});
}

export default Component;
