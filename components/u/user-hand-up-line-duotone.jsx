import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cxv0e2blx.css';
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
		"content": `<g class="ipq1z-bjh"><path class="cxv0e2blx"/><path class="mmqgyxbpq"/><circle class="dtl23o_xq"/></g>`,
		"fallback": "solar:user-hand-up-line-duotone",
	});
}

export default Component;
