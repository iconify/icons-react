import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ip5zz346n.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/y/y1xc06bdo.css';
import '../../css/e/e8xwqrlkc.css';
import '../../css/r/r0p-ejt9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ip5zz346n"/><circle class="dtl23o_xq"/><path class="y1xc06bdo"/><path class="e8xwqrlkc"/><path class="r0p-ejt9x"/></g>`,
		"fallback": "solar:user-plus-line-duotone",
	});
}

export default Component;
