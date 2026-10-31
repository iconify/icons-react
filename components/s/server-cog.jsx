import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wib3bn-kj.css';
import '../../css/r/rt3ke_bou.css';
import '../../css/j/jrq_zsyed.css';
import '../../css/f/f927eel9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG3tz7TdIU" x1="9.43" x2="15.43" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="wib3bn-kj wm-s"/><path fill="url(#SVG3tz7TdIU)" class="rt3ke_bou"/><path class="jrq_zsyed wm-s"/><path class="f927eel9f wm-shine"/></g>`,
		"fallback": "withicons-utsav:server-cog",
	});
}

export default Component;
