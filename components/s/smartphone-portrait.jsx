import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l314gsbcc.css';

const viewBox = {"width":304,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l314gsbcc"/>`,
		"fallback": "zmdi:smartphone-portrait",
	});
}

export default Component;
