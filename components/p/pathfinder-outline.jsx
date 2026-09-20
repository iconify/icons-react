import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xu319g_cx.css';
import '../../css/c/cevi-y_in.css';
import '../../css/q/qpjllijze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xu319g_cx"/><path class="cevi-y_in"/><path class="qpjllijze"/></g>`,
		"fallback": "streamline-sharp-color:pathfinder-outline",
	});
}

export default Component;
