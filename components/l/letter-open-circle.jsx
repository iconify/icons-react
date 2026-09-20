import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vuh9j7bmj.css';
import '../../css/l/l6zx7bbpl.css';
import '../../css/s/sklbftbkc.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vuh9j7bmj"/><path class="l6zx7bbpl"/><path class="sklbftbkc"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:letter-open-circle",
	});
}

export default Component;
