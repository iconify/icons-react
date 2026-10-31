import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zxsi2jbiy.css';
import '../../css/n/n85129bif.css';
import '../../css/v/vpy6013he.css';
import '../../css/z/zzcuodk8p.css';
import '../../css/w/w_--o6bdq.css';
import '../../css/s/s9awmvb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zxsi2jbiy"/><path class="n85129bif"/><path class="vpy6013he"/><path class="zzcuodk8p"/><path class="w_--o6bdq"/><path class="s9awmvb_g"/></g>`,
		"fallback": "withicons-retro:pause",
	});
}

export default Component;
