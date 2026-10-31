import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nv5a3cfjf.css';
import '../../css/y/y8kymzbfs.css';
import '../../css/s/s1zkajbpx.css';
import '../../css/f/f_18h-byr.css';
import '../../css/a/apddmql3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nv5a3cfjf wm-shadow"/><path class="y8kymzbfs"/><path class="s1zkajbpx"/><path class="f_18h-byr"/><path class="apddmql3n"/></g>`,
		"fallback": "withicons-retro:search",
	});
}

export default Component;
