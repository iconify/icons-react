import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0dg0vbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g0dg0vbct"/>`,
		"fallback": "solar:round-arrow-right-down-outline",
	});
}

export default Component;
