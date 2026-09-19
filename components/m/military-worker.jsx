import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fbehgn6qb.css';
import '../../css/g/gt4fqkosk.css';
import '../../css/e/eiaq64bmn.css';
import '../../css/f/fajoa5bmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fbehgn6qb"/><path class="gt4fqkosk"/><path clip-rule="evenodd" class="eiaq64bmn"/><path class="fajoa5bmp"/></g>`,
		"fallback": "healthicons:military-worker",
	});
}

export default Component;
