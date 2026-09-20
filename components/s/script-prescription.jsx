import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/b/bvgu9pbpm.css';
import '../../css/l/lfq9fzbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="bvgu9pbpm"/><path class="lfq9fzbwt"/></g>`,
		"fallback": "majesticons:script-prescription",
	});
}

export default Component;
