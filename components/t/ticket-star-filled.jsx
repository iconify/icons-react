import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo98_0bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo98_0bpx"/>`,
		"fallback": "boxicons:ticket-star-filled",
	});
}

export default Component;
