import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j7qkqx3eq.css';
import '../../css/v/vix9c2b9z.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j7qkqx3eq"/><path class="vix9c2b9z"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:taxi-circle",
	});
}

export default Component;
