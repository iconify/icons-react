import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hxpqc3b-g.css';
import '../../css/l/l911jxl-r.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hxpqc3b-g"/><path class="l911jxl-r"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:paperclip-circle",
	});
}

export default Component;
