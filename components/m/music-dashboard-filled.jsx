import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9r8o1b1j.css';
import '../../css/y/yo5v63pmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9r8o1b1j"/><path class="yo5v63pmu"/></g>`,
		"fallback": "reicon:music-dashboard-filled",
	});
}

export default Component;
