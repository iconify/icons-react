import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thpy47d_f.css';
import '../../css/e/e8x6debrh.css';
import '../../css/u/u96hv1wct.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thpy47d_f"><circle class="e8x6debrh"/><path class="u96hv1wct"/></g>`,
		"fallback": "devicon:ionic",
	});
}

export default Component;
