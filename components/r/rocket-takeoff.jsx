import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szatyqnji.css';
import '../../css/q/qlmmw0bib.css';
import '../../css/y/yvaopobve.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="szatyqnji"/><path class="qlmmw0bib"/><path class="yvaopobve"/></g>`,
		"fallback": "bi:rocket-takeoff",
	});
}

export default Component;
