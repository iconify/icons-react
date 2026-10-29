import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rlvs0_bxh.css';
import '../../css/o/orbkzms4d.css';
import '../../css/f/f3mhswb8e.css';
import '../../css/h/hp1hbub6q.css';
import '../../css/l/l5ty1pb8l.css';
import '../../css/a/a6xf3yi3d.css';
import '../../css/d/drp-yveeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="rlvs0_bxh wm-shadow"/><path class="orbkzms4d"/><path class="f3mhswb8e"/><path class="hp1hbub6q"/><path class="l5ty1pb8l"/><path class="a6xf3yi3d wm-shine"/><path class="drp-yveeu wm-deco"/></g>`,
		"fallback": "withicons-sticker:toilet",
	});
}

export default Component;
