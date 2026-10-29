import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/up-h3lbja.css';
import '../../css/u/upro8abul.css';
import '../../css/n/nphaat-vx.css';
import '../../css/s/s-1n0hbuh.css';
import '../../css/p/povpuybgb.css';
import '../../css/a/aj1r45djd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="up-h3lbja wm-shadow"/><path class="upro8abul"/><path class="nphaat-vx"/><path class="s-1n0hbuh"/><path class="povpuybgb wm-shine"/><path class="aj1r45djd wm-deco"/></g>`,
		"fallback": "withicons-sticker:star-half",
	});
}

export default Component;
