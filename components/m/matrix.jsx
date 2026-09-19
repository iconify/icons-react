import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dya604bcs.css';
import '../../css/i/iru7dcbsq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dya604bcs"/><path class="iru7dcbsq"/></g>`,
		"fallback": "at-icons:matrix",
	});
}

export default Component;
