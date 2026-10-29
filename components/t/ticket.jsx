import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u9n0vfb_o.css';
import '../../css/e/ehbq24biy.css';
import '../../css/r/r0dukdb1k.css';
import '../../css/u/uy2bwtbta.css';
import '../../css/i/i4bvl7b5s.css';
import '../../css/e/erepes1tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="u9n0vfb_o wm-shadow"/><path class="ehbq24biy"/><path class="r0dukdb1k"/><path class="uy2bwtbta"/><path class="i4bvl7b5s wm-shine"/><path class="erepes1tj wm-deco"/></g>`,
		"fallback": "withicons-sticker:ticket",
	});
}

export default Component;
