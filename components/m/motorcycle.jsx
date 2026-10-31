import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/ood7p6ckz.css';
import '../../css/h/hrulogbpl.css';
import '../../css/v/vh4v6rvhz.css';
import '../../css/v/vs502yelb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGt9N2aeAC" x1="9" x2="15" y1="6.5" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGt9N2aeAC)" class="ood7p6ckz"/><path class="hrulogbpl wm-shine"/><path class="vh4v6rvhz wm-shine"/><path class="vs502yelb wm-shine"/></g>`,
		"fallback": "withicons-utsav:motorcycle",
	});
}

export default Component;
