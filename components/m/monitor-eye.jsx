import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3dx1-62j.css';
import '../../css/d/dgegu4bry.css';
import '../../css/r/r2ccggblh.css';
import '../../css/r/rmw3h6bul.css';
import '../../css/i/ibafzcxog.css';
import '../../css/a/a-bfzz_ep.css';
import '../../css/y/yv8o5dgxs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c3dx1-62j"/><path clip-rule="evenodd" class="dgegu4bry"/><path clip-rule="evenodd" class="r2ccggblh"/><path clip-rule="evenodd" class="rmw3h6bul"/><path clip-rule="evenodd" class="ibafzcxog"/><path class="a-bfzz_ep"/><path clip-rule="evenodd" class="yv8o5dgxs"/></g>`,
		"fallback": "pepicons:monitor-eye",
	});
}

export default Component;
