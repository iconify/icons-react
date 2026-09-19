import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qepuaqbvx.css';
import '../../css/h/he2gnabzt.css';
import '../../css/e/ed4-52b0w.css';
import '../../css/h/hc4p3qb0k.css';
import '../../css/k/k08ob0lbu.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 947.638)" class="qepuaqbvx"><rect class="he2gnabzt"/><g class="ed4-52b0w"><path class="hc4p3qb0k"/><path class="k08ob0lbu"/></g></g>`,
		"fallback": "bpmn:receive-task",
	});
}

export default Component;
