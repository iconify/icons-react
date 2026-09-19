import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a7ghels8f.css';
import '../../css/m/mn3voztcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a7ghels8f"/><path class="mn3voztcy"/></g>`,
		"fallback": "griddy-icons:salami",
	});
}

export default Component;
