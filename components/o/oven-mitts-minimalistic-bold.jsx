import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfknu2blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfknu2blj"/>`,
		"fallback": "solar:oven-mitts-minimalistic-bold",
	});
}

export default Component;
