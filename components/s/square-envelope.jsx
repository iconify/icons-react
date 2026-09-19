import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1mu0_w5u.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1mu0_w5u"/>`,
		"fallback": "fa6-solid:square-envelope",
	});
}

export default Component;
