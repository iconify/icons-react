import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wd-n0bc9l.css';
import '../../css/k/kdpl1_b6g.css';
import '../../css/o/og_8k_rlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wd-n0bc9l"/><path class="kdpl1_b6g"/><path class="og_8k_rlo"/></g>`,
		"fallback": "reicon:suitcase2-duotone",
	});
}

export default Component;
