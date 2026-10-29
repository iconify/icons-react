import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/awf5bhbxs.css';
import '../../css/k/kfz5yrb5e.css';
import '../../css/z/z3te8sbzk.css';
import '../../css/u/uikytvy5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="awf5bhbxs wm-deco"/><path class="kfz5yrb5e wm-k"/><path class="wm-k z3te8sbzk"/><path class="uikytvy5m wm-a"/></g>`,
		"fallback": "withicons:rose-sketch",
	});
}

export default Component;
