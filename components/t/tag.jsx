import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lai1y5_5e.css';
import '../../css/q/qriqu5bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="lai1y5_5e"/><path class="qriqu5bac"/></g>`,
		"fallback": "wordpress:tag",
	});
}

export default Component;
