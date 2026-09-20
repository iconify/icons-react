import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/h/hn-as6b7m.css';
import '../../css/s/sgl4o34ri.css';
import '../../css/q/qh7mljbyv.css';
import '../../css/e/ed3mcy8qt.css';
import '../../css/x/x3ybkcknw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><rect class="hn-as6b7m"/><path clip-rule="evenodd" class="sgl4o34ri"/></g><path class="qh7mljbyv"/><path class="ed3mcy8qt"/><path clip-rule="evenodd" class="x3ybkcknw"/></g>`,
		"fallback": "pepicons-print:trash",
	});
}

export default Component;
