import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dm2oz9bnr.css';
import '../../css/l/lv6i0qblq.css';
import '../../css/r/r6c_bmbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dm2oz9bnr"/><path class="lv6i0qblq"/><path class="r6c_bmbvc"/></g>`,
		"fallback": "solar:skirt-broken",
	});
}

export default Component;
