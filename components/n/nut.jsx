import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4ocrv3af.css';
import '../../css/l/llm1pwvcz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a4ocrv3af"/><path class="llm1pwvcz"/></g>`,
		"fallback": "bi:nut",
	});
}

export default Component;
