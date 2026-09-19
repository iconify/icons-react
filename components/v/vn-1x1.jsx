import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s62b32b6l.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j3a0b6s5i.css';
import '../../css/i/icj42zygn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGCUQTvdjP"><path class="s62b32b6l"/></clipPath></defs><g clip-path="url(#SVGCUQTvdjP)" transform="translate(-128)scale(.72249)" class="d2kvgvbvc"><path class="j3a0b6s5i"/><path class="icj42zygn"/></g>`,
		"fallback": "flag:vn-1x1",
	});
}

export default Component;
