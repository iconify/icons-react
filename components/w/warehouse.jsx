import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/guhtw-bgn.css';
import '../../css/w/w-x2erb2e.css';
import '../../css/a/aji59v5od.css';
import '../../css/h/h2lkeab8t.css';
import '../../css/r/r_4bfna7m.css';
import '../../css/f/ft1fgmbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="guhtw-bgn wm-shadow"/><path class="w-x2erb2e"/><path class="aji59v5od"/><path class="h2lkeab8t"/><path class="r_4bfna7m wm-shine"/><path class="ft1fgmbyn wm-deco"/></g>`,
		"fallback": "withicons-sticker:warehouse",
	});
}

export default Component;
