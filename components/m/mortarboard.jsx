import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-pr0abaa.css';
import '../../css/s/s36bedttz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-pr0abaa"/><path class="s36bedttz"/></g>`,
		"fallback": "bi:mortarboard",
	});
}

export default Component;
