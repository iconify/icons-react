import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/b/bx8psl5rs.css';
import '../../css/k/kt5j0qbzm.css';
import '../../css/f/f77r5x84s.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="bx8psl5rs"/><path clip-rule="evenodd" class="kt5j0qbzm"/><path class="f77r5x84s"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:t-shirt-circle-off",
	});
}

export default Component;
