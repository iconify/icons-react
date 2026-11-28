import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rznvhtmtm.css';
import '../../css/w/wjdq--c_j.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rznvhtmtm"/><path class="wjdq--c_j"/></g>`,
		"fallback": "pullo:telescope-duotone",
	});
}

export default Component;
