import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m-7o8veeh.css';
import '../../css/k/k3m1ttb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m-7o8veeh"/><path class="k3m1ttb_h"/></g>`,
		"fallback": "hugeicons:user-full-view",
	});
}

export default Component;
