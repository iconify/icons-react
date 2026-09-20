import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q7cmimb1r.css';
import '../../css/r/rq8m0xmwq.css';
import '../../css/c/cb4dv35kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q7cmimb1r"/><path class="rq8m0xmwq"/><path class="cb4dv35kh"/></g>`,
		"fallback": "streamline-freehand-color:task-list-clipboard-favorite-star",
	});
}

export default Component;
