import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/ke_-bl5ua.css';
import '../../css/i/iprbtxrqi.css';
import '../../css/p/p2lf0gbbk.css';
import '../../css/o/ol3gl_bwr.css';
import '../../css/r/rmqfx4b0w.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ke_-bl5ua wm-shadow"/><path class="iprbtxrqi"/><path class="p2lf0gbbk"/><path class="ol3gl_bwr"/><path class="rmqfx4b0w wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`,
		"fallback": "withicons-sticker:trending-down",
	});
}

export default Component;
