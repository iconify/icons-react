import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d7c7tibwu.css';
import '../../css/c/ck5mj_mbs.css';
import '../../css/i/i5sn--6zu.css';
import '../../css/p/p9pn97g5g.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="d7c7tibwu"/><path class="ck5mj_mbs wm-shine"/><path class="i5sn--6zu wm-k"/><path class="p9pn97g5g wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sleigh",
	});
}

export default Component;
