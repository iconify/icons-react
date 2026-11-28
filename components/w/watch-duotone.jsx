import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qb59eff8s.css';
import '../../css/i/iwynh65rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qb59eff8s secondary"/><path class="iwynh65rq primary"/></g>`,
		"fallback": "iconaut:watch-duotone",
	});
}

export default Component;
