import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kthlowbcf.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kthlowbcf"/>`,
		"fallback": "fa6-solid:r",
	});
}

export default Component;
