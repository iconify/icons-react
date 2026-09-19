import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woyst7bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woyst7bge"/>`,
		"fallback": "boxicons:scooter-delivery",
	});
}

export default Component;
