import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5fy5w_1n.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5fy5w_1n"/>`,
		"fallback": "fa6-solid:mars-stroke-up",
	});
}

export default Component;
