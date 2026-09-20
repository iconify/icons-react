import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nzxh2cc7j.css';
import '../../css/k/k1p7g6bvl.css';
import '../../css/t/t_cpxbcsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nzxh2cc7j"/><path class="k1p7g6bvl"/><path class="t_cpxbcsj"/></g>`,
		"fallback": "reicon:square-sort-h-duotone",
	});
}

export default Component;
