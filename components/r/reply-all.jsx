import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mqkn9j7sa.css';
import '../../css/w/w3fwzg7_i.css';
import '../../css/p/px3pufbdm.css';
import '../../css/p/ps45epx1q.css';
import '../../css/x/xyz3h8buw.css';
import '../../css/e/epv168b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mqkn9j7sa wm-shadow"/><path class="w3fwzg7_i"/><path class="px3pufbdm"/><path class="ps45epx1q"/><path class="wm-shine xyz3h8buw"/><path class="epv168b8p wm-deco"/></g>`,
		"fallback": "withicons-sticker:reply-all",
	});
}

export default Component;
