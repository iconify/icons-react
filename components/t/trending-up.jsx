import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dda7lqbgk.css';
import '../../css/m/mav1xqfkd.css';
import '../../css/w/wnveq1bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dda7lqbgk wm-k"/><path class="mav1xqfkd wm-a"/><path class="wm-deco wnveq1bjc"/></g>`,
		"fallback": "withicons-kawaii:trending-up",
	});
}

export default Component;
