import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hqh-3ysyr.css';
import '../../css/u/uj8p1rjeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hqh-3ysyr"/><path class="uj8p1rjeg"/></g>`,
		"fallback": "tabler:tags-filled",
	});
}

export default Component;
