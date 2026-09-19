import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s62b32b6l.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/o/o0fyexb-p.css';
import '../../css/i/ird86_e6x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGCUQTvdjP"><path class="s62b32b6l"/></clipPath></defs><g clip-path="url(#SVGCUQTvdjP)" transform="translate(-128)scale(.72249)" class="nv9qcacyl"><path class="o0fyexb-p"/><circle transform="translate(-59.7 -34.5)scale(1.1302)" class="ird86_e6x"/></g>`,
		"fallback": "flag:jp-1x1",
	});
}

export default Component;
