import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqe5nibdc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqe5nibdc"/>`,
		"fallback": "garden:star-stroke-20",
	});
}

export default Component;
