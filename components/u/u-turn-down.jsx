import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vq3pbhbzo.css';
import '../../css/u/u_erkqblh.css';
import '../../css/h/hxiqiybia.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vq3pbhbzo"/><path class="u_erkqblh"/><circle transform="rotate(90 35 39)" class="hxiqiybia"/></g>`,
		"fallback": "icon-park-solid:u-turn-down",
	});
}

export default Component;
