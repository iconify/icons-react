import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fdcia5wbd.css';
import '../../css/m/mmqgyxbpq.css';
import '../../css/d/dtl23o_xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fdcia5wbd"/><path class="mmqgyxbpq"/><circle class="dtl23o_xq"/></g>`,
		"fallback": "solar:user-hands-line-duotone",
	});
}

export default Component;
