import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qn7ra9bpb.css';
import '../../css/o/oxji76bkm.css';
import '../../css/c/ck-x5--3n.css';
import '../../css/p/p2-mbsbue.css';
import '../../css/w/w8w5t9ikw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qn7ra9bpb"/><path class="oxji76bkm"/><path class="ck-x5--3n"/><path class="p2-mbsbue"/><path class="w8w5t9ikw"/></g>`,
		"fallback": "solar:trash-bin-minimalistic-broken",
	});
}

export default Component;
