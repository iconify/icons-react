import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/csupzbc3z.css';
import '../../css/h/hh2e5kbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="csupzbc3z"/><path class="hh2e5kbsc"/></g>`,
		"fallback": "griddy-icons:washing-machine",
	});
}

export default Component;
