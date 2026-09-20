import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnwl7-b_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnwl7-b_m"/>`,
		"fallback": "subway:time-1",
	});
}

export default Component;
