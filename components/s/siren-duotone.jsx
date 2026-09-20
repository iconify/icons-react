import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jufq1ac9u.css';
import '../../css/d/d0_2mpb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jufq1ac9u"/><path class="d0_2mpb5e"/></g>`,
		"fallback": "reicon:siren-duotone",
	});
}

export default Component;
