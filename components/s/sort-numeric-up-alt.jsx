import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r1absybzn.css';
import '../../css/i/iy57agh-c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r1absybzn"/><path class="iy57agh-c"/></g>`,
		"fallback": "bi:sort-numeric-up-alt",
	});
}

export default Component;
