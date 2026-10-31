import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xrq-c3b5e.css';
import '../../css/l/l3yqu5b4x.css';
import '../../css/w/ww9he6boj.css';
import '../../css/v/vta5wabim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xrq-c3b5e"/><path class="l3yqu5b4x"/><path class="ww9he6boj"/><path class="vta5wabim"/></g>`,
		"fallback": "withicons-retro:umbrella",
	});
}

export default Component;
