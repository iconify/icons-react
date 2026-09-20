import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evsml8bnv.css';
import '../../css/b/b6fgnqb9t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="evsml8bnv"/><path class="b6fgnqb9t"/></g>`,
		"fallback": "rivet-icons:link",
	});
}

export default Component;
