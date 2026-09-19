import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ok2lnz2ds.css';
import '../../css/u/utah8xten.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ok2lnz2ds"/><path class="utah8xten"/></g>`,
		"fallback": "at-icons:thunderstorm",
	});
}

export default Component;
