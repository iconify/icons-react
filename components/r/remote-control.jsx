import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w0pm_1bzn.css';
import '../../css/s/shlsjfb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w0pm_1bzn"/><path class="shlsjfb6v"/></g>`,
		"fallback": "hugeicons:remote-control",
	});
}

export default Component;
