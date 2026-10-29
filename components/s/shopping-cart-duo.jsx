import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rk-y7ubcm.css';
import '../../css/k/k012t9-gu.css';
import '../../css/e/euee9wbaf.css';
import '../../css/y/ytznpnb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rk-y7ubcm"/><path class="k012t9-gu wm-a"/><path class="euee9wbaf wm-a"/><path class="ytznpnb1t"/></g>`,
		"fallback": "withicons:shopping-cart-duo",
	});
}

export default Component;
