import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k87mnbcsh.css';
import '../../css/s/s-m4y-b6j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k87mnbcsh"/><path class="s-m4y-b6j"/></g>`,
		"fallback": "rivet-icons:parking-solid",
	});
}

export default Component;
