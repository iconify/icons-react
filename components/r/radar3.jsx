import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/rdz5iyb4e.css';
import '../../css/k/ksiqnrbyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="rdz5iyb4e"/><path class="ksiqnrbyp"/></g>`,
		"fallback": "reicon:radar3",
	});
}

export default Component;
