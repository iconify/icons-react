import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/zity5bbzt.css';
import '../../css/a/a47x8ovqr.css';
import '../../css/l/lr76g9sho.css';
import '../../css/d/d87hbdcsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGAQXYocQa" x1="9" x2="15" y1="1.51" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="wm-s zity5bbzt"/><path fill="url(#SVGAQXYocQa)" class="a47x8ovqr"/><path class="lr76g9sho wm-s"/><path class="d87hbdcsu wm-shine"/></g>`,
		"fallback": "withicons-utsav:oven",
	});
}

export default Component;
