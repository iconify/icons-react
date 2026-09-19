import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4_9pb1zj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4_9pb1zj"/>`,
		"fallback": "garden:pencil-fill-12",
	});
}

export default Component;
