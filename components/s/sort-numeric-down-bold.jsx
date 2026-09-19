import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svg81bcgr.css';
import '../../css/c/clok_hbux.css';
import '../../css/m/mvu50ub7r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="svg81bcgr"/><path class="clok_hbux"/><path class="mvu50ub7r"/></g>`,
		"fallback": "glyphs:sort-numeric-down-bold",
	});
}

export default Component;
