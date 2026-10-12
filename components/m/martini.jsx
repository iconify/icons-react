import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ot9rvd_0e.css';
import '../../css/x/xj9byebqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ot9rvd_0e"/><path class="xj9byebqy"/></g>`,
		"fallback": "andrsrxn:martini",
	});
}

export default Component;
