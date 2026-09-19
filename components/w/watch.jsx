import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhc0pb2vu.css';

const viewBox = {"width":328,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhc0pb2vu"/>`,
		"fallback": "ps:watch",
	});
}

export default Component;
