import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/ikf90pbpb.css';
import '../../css/b/b0o_pdb3s.css';
import '../../css/h/hz_b1sb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGAs0lfctR" x1="8.7" x2="14.7" y1="2.23" y2="22.37" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGAs0lfctR)" class="ikf90pbpb"/><path class="b0o_pdb3s wm-a"/><path class="hz_b1sb2j wm-shine"/></g>`,
		"fallback": "withicons-utsav:screwdriver",
	});
}

export default Component;
