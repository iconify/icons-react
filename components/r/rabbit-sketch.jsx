import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p0v-jwbgl.css';
import '../../css/d/d1s2x4b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p0v-jwbgl wm-k"/><path class="d1s2x4b6p wm-a"/></g>`,
		"fallback": "withicons:rabbit-sketch",
	});
}

export default Component;
