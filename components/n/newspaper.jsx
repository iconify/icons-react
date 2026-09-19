import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qyj0h7psz.css';
import '../../css/i/ir2_gtbej.css';
import '../../css/x/x2883_0ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qyj0h7psz"/><path class="ir2_gtbej"/><path class="x2883_0ul"/></g>`,
		"fallback": "hugeicons:newspaper",
	});
}

export default Component;
