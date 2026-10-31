import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wbpxjwb2l.css';
import '../../css/y/y5qtjbb5f.css';
import '../../css/w/wyxy0gblv.css';
import '../../css/j/j46d0n36j.css';
import '../../css/j/jmo_4-b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wbpxjwb2l wm-shadow"/><path class="y5qtjbb5f"/><path class="wyxy0gblv"/><path class="j46d0n36j"/><path class="jmo_4-b3k"/></g>`,
		"fallback": "withicons-retro:mails",
	});
}

export default Component;
