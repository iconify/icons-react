import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/o/ogiy3ul-z.css';
import '../../css/c/ch2eqs0do.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><path class="ogiy3ul-z"/><path class="ch2eqs0do"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-print:triangle-down-filled-circle",
	});
}

export default Component;
