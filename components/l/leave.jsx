import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mubzgebav.css';
import '../../css/o/of-yjebhp.css';
import '../../css/m/mw7ysqb_q.css';
import '../../css/o/ozf8btzov.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mubzgebav"/><path class="of-yjebhp"/><path class="mw7ysqb_q"/><path class="ozf8btzov"/></g>`,
		"fallback": "pepicons-pencil:leave",
	});
}

export default Component;
