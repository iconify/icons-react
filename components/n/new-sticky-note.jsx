import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utucrcc2n.css';
import '../../css/m/mq_q7mahq.css';
import '../../css/d/ddump5v9l.css';
import '../../css/r/rzihfne5q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="utucrcc2n"/><path class="mq_q7mahq"/><path class="ddump5v9l"/><path class="rzihfne5q"/></g>`,
		"fallback": "streamline-color:new-sticky-note",
	});
}

export default Component;
