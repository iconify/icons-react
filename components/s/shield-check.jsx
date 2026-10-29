import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzuye7bdg.css';
import '../../css/i/i1v6ehc1q.css';
import '../../css/t/t182xaboi.css';
import '../../css/p/pajw1zb4i.css';
import '../../css/l/l7oghkb8u.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzuye7bdg"/><path class="i1v6ehc1q"/><path class="t182xaboi"/><path class="pajw1zb4i"/><path class="l7oghkb8u wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`,
		"fallback": "withicons-sticker:shield-check",
	});
}

export default Component;
