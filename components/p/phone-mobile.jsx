import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/herg040oo.css';
import '../../css/a/ahy1hip_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="herg040oo"/><path class="ahy1hip_r"/></g>`,
		"fallback": "rivet-icons:phone-mobile",
	});
}

export default Component;
