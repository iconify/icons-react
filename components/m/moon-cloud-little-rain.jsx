import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w0n0gzb6b.css';
import '../../css/t/t1bp93bkt.css';
import '../../css/h/hagc2nfwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w0n0gzb6b"/><path class="t1bp93bkt"/><path class="hagc2nfwh"/></g>`,
		"fallback": "hugeicons:moon-cloud-little-rain",
	});
}

export default Component;
