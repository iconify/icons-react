import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/k/k6581zybp.css';
import '../../css/k/kp9dq2boj.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="k6581zybp"/><path class="kp9dq2boj"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:star-filled-circle",
	});
}

export default Component;
