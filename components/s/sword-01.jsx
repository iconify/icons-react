import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k3g88ac1q.css';
import '../../css/n/nf31t0akt.css';
import '../../css/v/vco_ahbxh.css';
import '../../css/i/i9gyr2bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k3g88ac1q"/><path class="nf31t0akt"/><path class="vco_ahbxh"/><path class="i9gyr2bxw"/></g>`,
		"fallback": "hugeicons:sword-01",
	});
}

export default Component;
