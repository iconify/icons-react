import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xlhj_xbyd.css';
import '../../css/x/x9h0chhbm.css';
import '../../css/m/mo9jed56c.css';
import '../../css/z/zmc_77bxx.css';
import '../../css/l/lom5babqj.css';
import '../../css/p/p7wnxsncr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow xlhj_xbyd"/><path class="x9h0chhbm"/><path class="mo9jed56c"/><path class="zmc_77bxx"/><path class="lom5babqj wm-shine"/><path class="p7wnxsncr wm-deco"/></g>`,
		"fallback": "withicons-sticker:superscript",
	});
}

export default Component;
