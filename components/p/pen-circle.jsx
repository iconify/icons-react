import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/v/vcqwtud6r.css';
import '../../css/m/m1ogalbcw.css';
import '../../css/e/ebdvt6j7o.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="vcqwtud6r"/><path class="m1ogalbcw"/><path class="ebdvt6j7o"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:pen-circle",
	});
}

export default Component;
