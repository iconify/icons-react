import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o6ybh1r5z.css';
import '../../css/z/zrce97a3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o6ybh1r5z"/><path class="zrce97a3l"/></g>`,
		"fallback": "streamline-freehand:scroll-vertical-smartphone",
	});
}

export default Component;
