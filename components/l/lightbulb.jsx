import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/u/uhm3i1jlb.css';
import '../../css/k/kk7jzcbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="uhm3i1jlb"/><path class="kk7jzcbcv"/></g>`,
		"fallback": "codex:lightbulb",
	});
}

export default Component;
