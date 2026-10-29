import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ytznpnb1t.css';
import '../../css/e/euee9wbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ytznpnb1t"/><path class="euee9wbaf wm-a"/></g>`,
		"fallback": "withicons:shopping-cart",
	});
}

export default Component;
