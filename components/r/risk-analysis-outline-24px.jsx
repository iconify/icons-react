import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qco8l2btt.css';
import '../../css/u/u7wqe2tmu.css';
import '../../css/m/mvxv-acdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qco8l2btt"/><path clip-rule="evenodd" class="u7wqe2tmu"/><path class="mvxv-acdp"/></g>`,
		"fallback": "healthicons:risk-analysis-outline-24px",
	});
}

export default Component;
