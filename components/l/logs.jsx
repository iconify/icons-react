import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/y/ygohlwx1g.css';
import '../../css/j/j-6otcc_g.css';
import '../../css/e/e16-6gimt.css';
import '../../css/p/pk5ln-bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGlC3NZd5f" x1="9.01" x2="15.01" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGlC3NZd5f)" class="ygohlwx1g"/><path class="j-6otcc_g wm-shine"/><path class="e16-6gimt wm-shine"/><path class="pk5ln-bxg wm-shine"/></g>`,
		"fallback": "withicons-utsav:logs",
	});
}

export default Component;
