import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq05cbbvi.css';
import '../../css/s/s9fsr7bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pq05cbbvi"/><path class="s9fsr7bak"/></g>`,
		"fallback": "reicon:mask-happy-duotone",
	});
}

export default Component;
