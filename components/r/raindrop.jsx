import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gol_dv2xu.css';
import '../../css/p/pojsc0o1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gol_dv2xu"/><path class="pojsc0o1r"/></g>`,
		"fallback": "griddy-icons:raindrop",
	});
}

export default Component;
