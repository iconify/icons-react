import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/znzzi_b5e.css';
import '../../css/f/fv0d35brl.css';
import '../../css/e/ew2t-hbjg.css';
import '../../css/l/l4z16zbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG1FVtXbIX" x1="9.01" x2="15.01" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG1FVtXbIX)" class="znzzi_b5e"/><path class="fv0d35brl wm-shine"/><path class="ew2t-hbjg wm-shine"/><path class="l4z16zbwn wm-shine"/></g>`,
		"fallback": "withicons-utsav:vr-headset",
	});
}

export default Component;
