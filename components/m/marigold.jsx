import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vze446b3g.css';
import '../../css/l/l0ie15bbm.css';
import '../../css/o/o7tk286de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vze446b3g"/><path class="l0ie15bbm"/><path class="o7tk286de"/></g>`,
		"fallback": "withicons-bauhaus:marigold",
	});
}

export default Component;
