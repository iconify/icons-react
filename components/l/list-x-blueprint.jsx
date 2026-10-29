import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jbdl250ba.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/t/tm9-ayd9z.css';
import '../../css/j/j3c_s-bua.css';
import '../../css/j/j6awffdnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jbdl250ba wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="tm9-ayd9z wm-k"/><path class="j3c_s-bua wm-s"/><path class="j6awffdnl wm-k"/></g>`,
		"fallback": "withicons:list-x-blueprint",
	});
}

export default Component;
