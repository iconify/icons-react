import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjga-fz2j.css';
import '../../css/h/h986ufb8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bjga-fz2j"/><path class="h986ufb8l"/></g>`,
		"fallback": "bi:pip",
	});
}

export default Component;
