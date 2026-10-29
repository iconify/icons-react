import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w10t2fg3u.css';
import '../../css/e/eoul4fblw.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/y/yig6ytbgj.css';
import '../../css/k/ke01m7bla.css';
import '../../css/e/ejfd17baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="w10t2fg3u wm-deco"/><path class="eoul4fblw wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="wm-k yig6ytbgj"/><path class="ke01m7bla wm-a"/><path class="ejfd17baq wm-k"/></g>`,
		"fallback": "withicons:skull-blueprint",
	});
}

export default Component;
