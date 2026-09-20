import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wffg9nbjg.css';
import '../../css/d/dq3w26b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="wffg9nbjg"/><path vector-effect="non-scaling-stroke" class="dq3w26b4q"/></g>`,
		"fallback": "wordpress:ungroup",
	});
}

export default Component;
