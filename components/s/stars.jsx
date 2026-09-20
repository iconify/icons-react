import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/e10tk9b_h.css';
import '../../css/v/v_o3fzbej.css';
import '../../css/l/lajajd1gy.css';
import '../../css/z/z9tjvobkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="e10tk9b_h"/><path class="v_o3fzbej"/></g><path clip-rule="evenodd" class="lajajd1gy"/><path class="z9tjvobkq"/></g>`,
		"fallback": "pepicons-print:stars",
	});
}

export default Component;
