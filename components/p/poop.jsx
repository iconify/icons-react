import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/smdh3r6ck.css';
import '../../css/a/az_1ir_pw.css';
import '../../css/n/nc92rkb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="smdh3r6ck"/><path class="az_1ir_pw"/><path class="nc92rkb_t"/></g>`,
		"fallback": "hugeicons:poop",
	});
}

export default Component;
