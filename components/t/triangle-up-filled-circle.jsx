import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ctoep-vcv.css';
import '../../css/j/j1wq095vt.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ctoep-vcv"/><path class="j1wq095vt"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:triangle-up-filled-circle",
	});
}

export default Component;
