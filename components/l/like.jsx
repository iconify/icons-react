import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nz2hbq1hz.css';
import '../../css/r/rb_nd615m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nz2hbq1hz"/><path class="rb_nd615m"/></g>`,
		"fallback": "andrsrxn:like",
	});
}

export default Component;
