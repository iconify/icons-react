import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/czeiw6b4w.css';
import '../../css/r/rjhfn4lny.css';
import '../../css/n/neb8scc3i.css';
import '../../css/e/eq-y86bpl.css';
import '../../css/s/srni6655m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="czeiw6b4w"/><path class="rjhfn4lny"/><path class="neb8scc3i"/><path class="eq-y86bpl"/><path class="srni6655m"/></g>`,
		"fallback": "solar:shop-2-linear",
	});
}

export default Component;
