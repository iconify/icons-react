import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/m/mragkonhx.css';
import '../../css/e/ez8fduk_y.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="mragkonhx"/><path class="ez8fduk_y"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:star-circle",
	});
}

export default Component;
