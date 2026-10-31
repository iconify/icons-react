import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zek6i08fk.css';
import '../../css/q/qx88x2_bh.css';
import '../../css/x/x3o2lrb9f.css';
import '../../css/s/silk_h7lc.css';
import '../../css/i/ipx5f1b4d.css';
import '../../css/w/w8eh8z8og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="wm-k zek6i08fk"/><circle class="qx88x2_bh wm-k"/><circle class="wm-k x3o2lrb9f"/><path class="silk_h7lc wm-k"/><path class="ipx5f1b4d wm-s"/><path class="w8eh8z8og wm-shine"/></g>`,
		"fallback": "withicons:smile-plus-gloss",
	});
}

export default Component;
