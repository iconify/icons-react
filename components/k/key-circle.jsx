import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xq4i8onee.css';
import '../../css/r/r1-p38bpp.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xq4i8onee"/><path class="r1-p38bpp"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:key-circle",
	});
}

export default Component;
