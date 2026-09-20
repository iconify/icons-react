import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/acx7prb2v.css';
import '../../css/c/cz7-c1s1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="acx7prb2v"/><path class="cz7-c1s1m"/></g>`,
		"fallback": "reicon:monitor-camera-filled",
	});
}

export default Component;
