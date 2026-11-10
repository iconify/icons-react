import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxz8cdc9f.css';
import '../../css/b/b2_8itb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kxz8cdc9f"/><path class="b2_8itb_h"/></g>`,
		"fallback": "andrsrxn:screen-contract-vertically",
	});
}

export default Component;
