import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_299bbbu.css';
import '../../css/n/n1u32wbyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b_299bbbu"/><path class="n1u32wbyg"/></g>`,
		"fallback": "bi:patch-minus",
	});
}

export default Component;
