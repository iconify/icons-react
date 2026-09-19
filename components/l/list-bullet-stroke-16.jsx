import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdacewuph.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sjgwxabga.css';
import '../../css/n/n_acx-3do.css';
import '../../css/a/abs76zb2o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdacewuph"/><g class="cuyn6tgcc"><circle class="sjgwxabga"/><circle class="n_acx-3do"/><circle class="abs76zb2o"/></g>`,
		"fallback": "garden:list-bullet-stroke-16",
	});
}

export default Component;
