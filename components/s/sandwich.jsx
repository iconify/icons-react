import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dkerhqs_s.css';
import '../../css/s/sxbz3so-x.css';
import '../../css/r/r__m9f86r.css';
import '../../css/u/ul5wjsbks.css';
import '../../css/m/mik6elsxp.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dkerhqs_s wm-shadow"/><path class="sxbz3so-x"/><path class="r__m9f86r"/><path class="ul5wjsbks"/><path class="mik6elsxp wm-shine"/><path class="q_yw93bsi wm-deco"/></g>`,
		"fallback": "withicons-sticker:sandwich",
	});
}

export default Component;
