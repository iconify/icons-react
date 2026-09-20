import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uq26tgp9r.css';
import '../../css/p/pvkbssbnh.css';
import '../../css/z/zj728-b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uq26tgp9r"/><path class="pvkbssbnh"/><path class="zj728-b4q"/></g>`,
		"fallback": "streamline-freehand:programming-team-chat",
	});
}

export default Component;
