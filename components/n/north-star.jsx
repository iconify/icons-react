import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r353ifb5s.css';
import '../../css/m/meesmg-tw.css';
import '../../css/r/rc_jrfdpb.css';
import '../../css/g/ge4xd36nc.css';
import '../../css/g/gcb86ib4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r353ifb5s wm-shadow"/><path class="meesmg-tw"/><path class="rc_jrfdpb"/><path class="ge4xd36nc"/><path class="gcb86ib4f"/></g>`,
		"fallback": "withicons-retro:north-star",
	});
}

export default Component;
