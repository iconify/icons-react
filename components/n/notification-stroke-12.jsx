import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg3t_8bcd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg3t_8bcd"/>`,
		"fallback": "garden:notification-stroke-12",
	});
}

export default Component;
