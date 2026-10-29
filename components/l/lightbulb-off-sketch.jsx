import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vr07_r38u.css';
import '../../css/x/xjelv0bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vr07_r38u wm-k"/><path class="wm-s xjelv0bve"/></g>`,
		"fallback": "withicons:lightbulb-off-sketch",
	});
}

export default Component;
