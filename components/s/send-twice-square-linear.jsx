import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cit_55o-r.css';
import '../../css/t/t1_7z3t8t.css';
import '../../css/f/fp2x79bfq.css';
import '../../css/x/xvjk-cbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cit_55o-r"/><path class="t1_7z3t8t"/><path class="fp2x79bfq"/><path class="xvjk-cbox"/></g>`,
		"fallback": "solar:send-twice-square-linear",
	});
}

export default Component;
