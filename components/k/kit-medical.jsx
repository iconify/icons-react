import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh0i0ccvh.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh0i0ccvh"/>`,
		"fallback": "fa6-solid:kit-medical",
	});
}

export default Component;
