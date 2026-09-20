import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8y5cubeq.css';
import '../../css/h/hq_2hbb4o.css';
import '../../css/x/xdw3fzbee.css';
import '../../css/r/rzxsj7d7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z8y5cubeq"/><path class="hq_2hbb4o"/><path class="xdw3fzbee"/><path clip-rule="evenodd" class="rzxsj7d7p"/></g>`,
		"fallback": "solar:suitcase-tag-bold-duotone",
	});
}

export default Component;
