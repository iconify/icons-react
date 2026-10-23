import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhdaxjb-g.css';
import '../../css/x/xd7jxwbfm.css';
import '../../css/b/b76gjed0b.css';
import '../../css/j/jr5c1hbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lhdaxjb-g"/><path class="xd7jxwbfm"/><path class="b76gjed0b"/><path class="jr5c1hbhg"/></g>`,
		"fallback": "andrsrxn:pie",
	});
}

export default Component;
