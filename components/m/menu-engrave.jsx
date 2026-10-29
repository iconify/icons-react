import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vnen35bwe.css';
import '../../css/w/w_4zjac6j.css';
import '../../css/d/dqueh1r5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vnen35bwe"/><path class="w_4zjac6j wm-shadow"/><path class="dqueh1r5k"/></g>`,
		"fallback": "withicons:menu-engrave",
	});
}

export default Component;
