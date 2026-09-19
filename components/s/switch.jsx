import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eq9gnfhuz.css';
import '../../css/e/e55r56knd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eq9gnfhuz"/><path class="e55r56knd"/></g>`,
		"fallback": "at-icons:switch",
	});
}

export default Component;
