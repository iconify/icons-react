import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0z3-vbty.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0z3-vbty"/>`,
		"fallback": "lineicons:microphone",
	});
}

export default Component;
