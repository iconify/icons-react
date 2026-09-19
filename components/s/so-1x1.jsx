import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s62b32b6l.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ixx_l8mln.css';
import '../../css/c/c-80e3h5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGCUQTvdjP"><path class="s62b32b6l"/></clipPath></defs><g clip-path="url(#SVGCUQTvdjP)" transform="translate(-128)scale(.72249)" class="d2kvgvbvc"><path class="ixx_l8mln"/><path class="c-80e3h5w"/></g>`,
		"fallback": "flag:so-1x1",
	});
}

export default Component;
