import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrh7cmb1u.css';
import '../../css/o/o2yzq1buu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rrh7cmb1u"/><path class="o2yzq1buu"/></g>`,
		"fallback": "at-icons:link",
	});
}

export default Component;
