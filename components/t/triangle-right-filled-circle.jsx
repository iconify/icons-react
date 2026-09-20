import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kax-q9blx.css';
import '../../css/h/hsit5q6hy.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kax-q9blx"/><path class="hsit5q6hy"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:triangle-right-filled-circle",
	});
}

export default Component;
