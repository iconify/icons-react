import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2gfsh5ia.css';
import '../../css/d/d09_q1bya.css';
import '../../css/r/rci-steit.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2gfsh5ia"/><path clip-rule="evenodd" class="d09_q1bya"/><path class="rci-steit"/></g>`,
		"fallback": "streamline-color:satellite-dish-flat",
	});
}

export default Component;
