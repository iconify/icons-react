import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ylwkqccqu.css';
import '../../css/h/hjex35bnt.css';
import '../../css/q/q-l2enbrn.css';
import '../../css/f/f68dwcljm.css';
import '../../css/p/p8j032byz.css';
import '../../css/l/lnqg4qybz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow ylwkqccqu"/><path class="hjex35bnt"/><path class="q-l2enbrn"/><path class="f68dwcljm"/><path class="p8j032byz"/><path class="lnqg4qybz wm-deco"/></g>`,
		"fallback": "withicons-sticker:pickaxe",
	});
}

export default Component;
