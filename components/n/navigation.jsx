import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/v6dvjy6ho.css';
import '../../css/o/ovk13ccmu.css';
import '../../css/u/u3sajc8ei.css';
import '../../css/c/cp9tt7_xc.css';
import '../../css/g/g5v0p4e7j.css';
import '../../css/z/zflb_q53q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="v6dvjy6ho wm-shadow"/><path class="ovk13ccmu"/><path class="u3sajc8ei"/><path class="cp9tt7_xc"/><path class="g5v0p4e7j wm-shine"/><path class="wm-deco zflb_q53q"/></g>`,
		"fallback": "withicons-sticker:navigation",
	});
}

export default Component;
