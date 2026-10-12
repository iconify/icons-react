import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzwv7qb0w.css';
import '../../css/l/lvqpiab2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hzwv7qb0w"/><path class="lvqpiab2f"/></g>`,
		"fallback": "andrsrxn:triangle-right",
	});
}

export default Component;
