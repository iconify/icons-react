import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vxznvy5gs.css';
import '../../css/r/ryi9k0mlv.css';
import '../../css/y/y3ho0mbgg.css';
import '../../css/w/w53sohfwv.css';
import '../../css/l/ljbzikb7e.css';
import '../../css/b/b0vcejw_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vxznvy5gs wm-shadow"/><path class="ryi9k0mlv"/><path class="y3ho0mbgg"/><path class="w53sohfwv"/><path class="ljbzikb7e wm-shine"/><path class="b0vcejw_s wm-deco"/></g>`,
		"fallback": "withicons-sticker:subscript",
	});
}

export default Component;
