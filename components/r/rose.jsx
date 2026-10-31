import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/svt0libbt.css';
import '../../css/u/usaho75gi.css';
import '../../css/n/nzgly-bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXQz8zd5I" x1="9" x2="15" y1="1.94" y2="22.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGXQz8zd5I)" class="svt0libbt"/><path class="usaho75gi wm-a"/><path class="nzgly-bfg wm-shine"/></g>`,
		"fallback": "withicons-utsav:rose",
	});
}

export default Component;
