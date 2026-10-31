import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/nlzrbdcjg.css';
import '../../css/a/at23fnb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGP96MPdhG" x1="8.93" x2="14.93" y1="2.52" y2="21.62" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGP96MPdhG)" class="nlzrbdcjg"/><path class="at23fnb7f wm-shine"/></g>`,
		"fallback": "withicons-utsav:pencil",
	});
}

export default Component;
