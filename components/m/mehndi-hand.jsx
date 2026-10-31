import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/z2kfigbjr.css';
import '../../css/u/uwf5b17un.css';
import '../../css/r/r1pb3hbtm.css';
import '../../css/g/gh6indbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGpakL4djy" x1="8.99" x2="14.99" y1="2" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGpakL4djy)" class="z2kfigbjr"/><path class="uwf5b17un wm-shine"/><path class="r1pb3hbtm wm-shine"/><path class="gh6indbdd wm-shine"/></g>`,
		"fallback": "withicons-utsav:mehndi-hand",
	});
}

export default Component;
