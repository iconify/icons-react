import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8rmb_b-y.css';
import '../../css/e/et_co0qle.css';
import '../../css/o/oxww_b3zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f8rmb_b-y"/><path class="et_co0qle"/><path class="oxww_b3zx"/></g>`,
		"fallback": "solar:layout-freeform-linear",
	});
}

export default Component;
