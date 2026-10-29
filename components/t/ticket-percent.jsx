import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u9n0vfb_o.css';
import '../../css/e/ehbq24biy.css';
import '../../css/r/r0dukdb1k.css';
import '../../css/d/di4za356h.css';
import '../../css/y/ypj9w7bqa.css';
import '../../css/t/tmi471b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="u9n0vfb_o wm-shadow"/><path class="ehbq24biy"/><path class="r0dukdb1k"/><path class="di4za356h"/><path class="wm-shine ypj9w7bqa"/><path class="tmi471b8u wm-deco"/></g>`,
		"fallback": "withicons-sticker:ticket-percent",
	});
}

export default Component;
