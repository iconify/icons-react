import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpg2qpbbg.css';
import '../../css/r/r2gwk68fi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xpg2qpbbg"/><path class="r2gwk68fi"/></g>`,
		"fallback": "bi:speedometer2",
	});
}

export default Component;
