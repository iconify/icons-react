import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxhhfyb8o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxhhfyb8o"/>`,
		"fallback": "garden:phone-call-end-stroke-16",
	});
}

export default Component;
