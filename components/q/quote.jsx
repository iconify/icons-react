import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/hhofdp-3p.css';
import '../../css/h/hk7xpjm5j.css';
import '../../css/e/ekujczbnl.css';
import '../../css/h/htmgun31r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5tWhvtsn" x1="9" x2="15" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG5tWhvtsn)" class="hhofdp-3p"/><path class="hk7xpjm5j wm-shine"/><path class="ekujczbnl wm-shine"/><path class="htmgun31r wm-shine"/></g>`,
		"fallback": "withicons-utsav:quote",
	});
}

export default Component;
