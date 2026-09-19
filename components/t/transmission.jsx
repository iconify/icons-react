import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xyd_xc68t.css';
import '../../css/e/e_mdbbcjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xyd_xc68t"/><path class="e_mdbbcjv"/></g>`,
		"fallback": "hugeicons:transmission",
	});
}

export default Component;
