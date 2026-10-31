import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/g4rbpccrn.css';
import '../../css/i/ilrh19bht.css';
import '../../css/y/y5bjzibsy.css';
import '../../css/f/f5tng0ycg.css';
import '../../css/p/pdv90eb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQOeWMd3q" x1="9.12" x2="15.12" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGQOeWMd3q)" class="g4rbpccrn"/><path class="ilrh19bht wm-a"/><path class="wm-shine y5bjzibsy"/><path class="f5tng0ycg wm-shine"/><path class="pdv90eb5c wm-shine"/></g>`,
		"fallback": "withicons-utsav:pilcrow",
	});
}

export default Component;
