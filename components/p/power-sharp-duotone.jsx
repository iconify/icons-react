import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f8u2w-9tv.css';
import '../../css/q/q5pxg1pze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="f8u2w-9tv"/><path class="q5pxg1pze"/></g>`,
		"fallback": "keyline-icons:power-sharp-duotone",
	});
}

export default Component;
