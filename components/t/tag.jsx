import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a1v_lfbmd.css';
import '../../css/h/h2l-huvgc.css';
import '../../css/s/symzpbbzw.css';
import '../../css/m/mp6-uthkq.css';
import '../../css/l/l9l-0cbho.css';
import '../../css/i/ilvbs_bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a1v_lfbmd wm-shadow"/><path class="h2l-huvgc"/><path class="symzpbbzw"/><path class="mp6-uthkq"/><path class="l9l-0cbho wm-shine"/><path class="ilvbs_bdh wm-deco"/></g>`,
		"fallback": "withicons-sticker:tag",
	});
}

export default Component;
