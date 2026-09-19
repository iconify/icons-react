import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x6vm-8qvv.css';
import '../../css/q/qna-m1b4k.css';
import '../../css/u/ucg8mrbfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x6vm-8qvv"/><path class="qna-m1b4k"/><path class="ucg8mrbfd"/></g>`,
		"fallback": "icon-park-solid:pull-requests",
	});
}

export default Component;
