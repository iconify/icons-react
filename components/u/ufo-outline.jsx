import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/ml_n0obfa.css';
import '../../css/e/egm-6jb-e.css';
import '../../css/h/hdp-dbbeo.css';
import '../../css/u/ub1sm6b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ml_n0obfa"/><path class="egm-6jb-e"/><path class="hdp-dbbeo"/><path class="ub1sm6b-d"/></g>`,
		"fallback": "solar:ufo-outline",
	});
}

export default Component;
