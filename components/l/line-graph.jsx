import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3io1hbci.css';
import '../../css/v/vvgej9bvn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q3io1hbci"/><path class="vvgej9bvn"/></g>`,
		"fallback": "at-icons:line-graph",
	});
}

export default Component;
