import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rhqz9unzd.css';
import '../../css/u/ub6otqx8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rhqz9unzd"/><path class="ub6otqx8t"/></g>`,
		"fallback": "gg:log-in",
	});
}

export default Component;
