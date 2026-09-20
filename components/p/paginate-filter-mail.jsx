import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n7s480bvh.css';
import '../../css/j/j1se2g-wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n7s480bvh"/><path class="j1se2g-wf"/></g>`,
		"fallback": "streamline-freehand:paginate-filter-mail",
	});
}

export default Component;
