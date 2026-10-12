import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmv6mvtwa.css';
import '../../css/t/tfb131ows.css';
import '../../css/x/x6ia6bcjq.css';
import '../../css/w/w6cs0lcqm.css';
import '../../css/z/z0h9o0bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cmv6mvtwa"/><path class="tfb131ows"/><path class="x6ia6bcjq"/><path class="w6cs0lcqm"/><path class="z0h9o0bdm"/></g>`,
		"fallback": "andrsrxn:key-access",
	});
}

export default Component;
