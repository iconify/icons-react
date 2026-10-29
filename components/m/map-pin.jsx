import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zp0ng9pts.css';
import '../../css/j/j2hilo-fm.css';
import '../../css/y/y0koxj35y.css';
import '../../css/y/yg0p_hb_s.css';
import '../../css/y/ydj_w6eka.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow zp0ng9pts"/><path class="j2hilo-fm"/><path class="y0koxj35y"/><path class="yg0p_hb_s"/><path class="wm-shine ydj_w6eka"/><path class="usyb2xbzn wm-deco"/></g>`,
		"fallback": "withicons-sticker:map-pin",
	});
}

export default Component;
