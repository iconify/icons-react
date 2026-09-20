import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rbwmgp1nx.css';
import '../../css/w/wh07c6bhb.css';
import '../../css/c/c7_d72tdc.css';
import '../../css/e/e_w-t6bwn.css';
import '../../css/r/rjk8xfbbv.css';
import '../../css/f/f066lccuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rbwmgp1nx"/><path class="wh07c6bhb"/><path class="c7_d72tdc"/><path class="e_w-t6bwn"/><path class="rjk8xfbbv"/><path class="f066lccuw"/></g>`,
		"fallback": "solar:server-minimalistic-line-duotone",
	});
}

export default Component;
