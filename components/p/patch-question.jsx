import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nybkspifn.css';
import '../../css/n/n1u32wbyg.css';
import '../../css/b/b6v88-svo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nybkspifn"/><path class="n1u32wbyg"/><path class="b6v88-svo"/></g>`,
		"fallback": "bi:patch-question",
	});
}

export default Component;
