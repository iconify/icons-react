import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jz3aueb9n.css';
import '../../css/v/vrq3k-bda.css';
import '../../css/i/ixlvp4jdq.css';
import '../../css/o/oqn965wzr.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jz3aueb9n"/><path class="vrq3k-bda"/><path class="ixlvp4jdq"/><path class="oqn965wzr"/></g>`,
		"fallback": "flag:tr-4x3",
	});
}

export default Component;
