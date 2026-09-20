import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oebs46bit.css';
import '../../css/a/akvwnwbfy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oebs46bit"/><path class="akvwnwbfy"/></g>`,
		"fallback": "rivet-icons:sad",
	});
}

export default Component;
