import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dsv5u4bvs.css';
import '../../css/p/pn3ybpbhi.css';
import '../../css/w/w76mqob-b.css';
import '../../css/e/ehs1v-pvm.css';
import '../../css/d/dzh0sd-ju.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dsv5u4bvs wm-shadow"/><path class="pn3ybpbhi"/><path class="w76mqob-b"/><path class="ehs1v-pvm"/><path class="dzh0sd-ju wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`,
		"fallback": "withicons-sticker:swap",
	});
}

export default Component;
