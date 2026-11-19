import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u878rh34u.css';
import '../../css/i/i32n-nbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u878rh34u"/><path class="i32n-nbjt"/></g>`,
		"fallback": "andrsrxn:squircle-dashed",
	});
}

export default Component;
