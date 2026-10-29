import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozz1ixbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozz1ixbnn"/>`,
		"fallback": "lucide:letter-k",
	});
}

export default Component;
