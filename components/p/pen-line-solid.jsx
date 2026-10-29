import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tztu75bug.css';
import '../../css/l/lhxj48b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tztu75bug"/><path class="lhxj48b3f wm-a"/></g>`,
		"fallback": "withicons:pen-line-solid",
	});
}

export default Component;
