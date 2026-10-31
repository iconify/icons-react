import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/t4w8d1bjd.css';
import '../../css/s/szazv7kbp.css';
import '../../css/d/db2_xcblj.css';
import '../../css/u/u3mv-l8yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSLbZ2R5R" x1="9" x2="15" y1="2.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGSLbZ2R5R)" class="t4w8d1bjd"/><path class="szazv7kbp wm-shine"/><path class="db2_xcblj wm-shine"/><path class="u3mv-l8yq wm-shine"/></g>`,
		"fallback": "withicons-utsav:user",
	});
}

export default Component;
