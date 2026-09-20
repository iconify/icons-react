import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b7wscybiu.css';
import '../../css/j/jjo_i9bfb.css';
import '../../css/t/tg14sl-9g.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b7wscybiu"/><path class="jjo_i9bfb"/><path class="tg14sl-9g"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:studio-light-front-circle",
	});
}

export default Component;
