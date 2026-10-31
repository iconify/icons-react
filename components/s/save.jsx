import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ur79r5g2j.css';
import '../../css/x/x4d99ub-t.css';
import '../../css/w/w11yo8viv.css';
import '../../css/y/ymjuf863o.css';
import '../../css/p/p76-_gbtv.css';
import '../../css/v/v-sazx1qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ur79r5g2j wm-shadow"/><path class="x4d99ub-t"/><path class="w11yo8viv"/><path class="ymjuf863o"/><path class="p76-_gbtv"/><path class="v-sazx1qx"/></g>`,
		"fallback": "withicons-retro:save",
	});
}

export default Component;
