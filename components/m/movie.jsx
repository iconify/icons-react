import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f73y469bv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f73y469bv"/>`,
		"fallback": "subway:movie",
	});
}

export default Component;
