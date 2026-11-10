import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/woeujfbbv.css';
import '../../css/r/r2z87mb4b.css';
import '../../css/o/ou7ihngoe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="woeujfbbv"/><path class="r2z87mb4b"/><path clip-rule="evenodd" class="ou7ihngoe"/></g>`,
		"fallback": "at-icons:loop-cut",
	});
}

export default Component;
