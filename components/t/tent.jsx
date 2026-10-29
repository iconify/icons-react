import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pyk4l33ub.css';
import '../../css/c/cfrkz1bpi.css';
import '../../css/z/z1w7_87bc.css';
import '../../css/a/a-3_qub0e.css';
import '../../css/t/tpgp6ebty.css';
import '../../css/n/nvvbyy2_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="pyk4l33ub wm-shadow"/><path class="cfrkz1bpi"/><path class="z1w7_87bc"/><path class="a-3_qub0e"/><path class="tpgp6ebty wm-shine"/><path class="nvvbyy2_l wm-deco"/></g>`,
		"fallback": "withicons-sticker:tent",
	});
}

export default Component;
