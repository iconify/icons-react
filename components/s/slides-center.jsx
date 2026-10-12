import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lorte5bwd.css';
import '../../css/y/yrjhnkz1w.css';
import '../../css/t/t7hy1nb8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 18.81 20.38)" class="lorte5bwd"/><rect transform="matrix(0 -1 -1 0 18.81 20.38)" class="yrjhnkz1w"/><path class="t7hy1nb8t"/></g>`,
		"fallback": "andrsrxn:slides-center",
	});
}

export default Component;
