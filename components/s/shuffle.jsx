import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg_pkj4pc.css';
import '../../css/e/emmkp_bqd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gg_pkj4pc"/><path class="emmkp_bqd"/></g>`,
		"fallback": "bi:shuffle",
	});
}

export default Component;
