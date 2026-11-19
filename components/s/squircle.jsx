import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u878rh34u.css';
import '../../css/d/dcwt8pb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u878rh34u"/><path class="dcwt8pb1s"/></g>`,
		"fallback": "andrsrxn:squircle",
	});
}

export default Component;
