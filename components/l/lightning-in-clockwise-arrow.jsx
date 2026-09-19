import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/by3fl4p3h.css';
import '../../css/g/gj7gkklqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="by3fl4p3h"/><path class="gj7gkklqw"/></g>`,
		"fallback": "at-icons:lightning-in-clockwise-arrow",
	});
}

export default Component;
