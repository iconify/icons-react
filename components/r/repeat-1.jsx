import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/w2idq4y1d.css';
import '../../css/m/m4fgovbjt.css';
import '../../css/s/s0ldxybjv.css';
import '../../css/e/e00zxdb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHKhIpe7e" x1="9" x2="15" y1="1" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="w2idq4y1d wm-s"/><path fill="url(#SVGHKhIpe7e)" class="m4fgovbjt"/><path class="s0ldxybjv wm-s"/><path class="e00zxdb-b wm-shine"/></g>`,
		"fallback": "withicons-utsav:repeat-1",
	});
}

export default Component;
