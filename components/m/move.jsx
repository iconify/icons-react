import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sy8p1ob8a.css';
import '../../css/m/mgp8b-gvd.css';
import '../../css/r/rzb-3eeuh.css';
import '../../css/u/u_g_tg3_h.css';
import '../../css/z/zetx6lb3t.css';
import '../../css/e/epv168b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="sy8p1ob8a wm-shadow"/><path class="mgp8b-gvd"/><path class="rzb-3eeuh"/><path class="u_g_tg3_h"/><path class="wm-shine zetx6lb3t"/><path class="epv168b8p wm-deco"/></g>`,
		"fallback": "withicons-sticker:move",
	});
}

export default Component;
