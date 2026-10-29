import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oefba7bzj.css';
import '../../css/v/v7nunhbxc.css';
import '../../css/q/qmauy_88m.css';
import '../../css/t/twnd-y5gp.css';
import '../../css/u/u64ok_brc.css';
import '../../css/t/tyjx_o9ao.css';
import '../../css/w/wirrkmbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="oefba7bzj wm-deco"/><path class="v7nunhbxc wm-deco"/><path class="qmauy_88m wm-deco"/><path class="twnd-y5gp wm-k"/><path class="u64ok_brc wm-a"/><path class="tyjx_o9ao wm-k"/><path class="wirrkmbsq wm-a"/></g>`,
		"fallback": "withicons:motorcycle-blueprint",
	});
}

export default Component;
