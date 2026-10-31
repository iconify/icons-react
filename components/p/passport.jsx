import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/r0m9s2w_n.css';
import '../../css/z/zpxunvb7o.css';
import '../../css/l/lzi4n3bzx.css';
import '../../css/g/g5wxnmb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="r0m9s2w_n"/><path class="wm-shine zpxunvb7o"/><path class="lzi4n3bzx wm-shine"/><path class="g5wxnmb0b wm-shine"/></g>`,
		"fallback": "withicons-utsav:passport",
	});
}

export default Component;
