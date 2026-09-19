import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwec2sbdf.css';
import '../../css/y/y-okkubvq.css';
import '../../css/u/ubuzbfdqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iwec2sbdf"/><path class="y-okkubvq"/><path clip-rule="evenodd" class="ubuzbfdqc"/></g>`,
		"fallback": "healthicons:pregnant-32w2x-outline",
	});
}

export default Component;
