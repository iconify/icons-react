import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/klyxgkb-z.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wb8cjb-ns.css';
import '../../css/g/gy2nyz5qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="klyxgkb-z"/><g class="mc2zb0bvp"><path class="wb8cjb-ns"/><path class="gy2nyz5qi"/></g></g>`,
		"fallback": "solar:reply-2-bold-duotone",
	});
}

export default Component;
