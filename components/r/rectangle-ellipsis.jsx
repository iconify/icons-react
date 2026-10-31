import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/eedcco_2r.css';
import '../../css/b/bmwf3t10i.css';
import '../../css/l/ln4u-1gjg.css';
import '../../css/k/k7_cvtbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1FVtXbIX" x1="9.01" x2="15.01" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG1FVtXbIX)" class="eedcco_2r"/><path class="bmwf3t10i wm-shine"/><path class="ln4u-1gjg wm-shine"/><path class="k7_cvtbgl wm-shine"/></g>`,
		"fallback": "withicons-utsav:rectangle-ellipsis",
	});
}

export default Component;
