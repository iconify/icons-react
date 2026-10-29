import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ih60krbxp.css';
import '../../css/g/gslay6boj.css';
import '../../css/g/gkvnwnbcc.css';
import '../../css/z/zgw3cac5l.css';
import '../../css/z/zkyawv07u.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ih60krbxp wm-shadow"/><path class="gslay6boj"/><path class="gkvnwnbcc"/><path class="zgw3cac5l"/><path class="wm-shine zkyawv07u"/><path class="t20ne0f3d wm-deco"/></g>`,
		"fallback": "withicons-sticker:leaf",
	});
}

export default Component;
