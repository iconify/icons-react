import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/blh93uisk.css';
import '../../css/u/uue-ojz7g.css';
import '../../css/n/nv3r1zbmr.css';
import '../../css/w/wzga5cc5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="blh93uisk"/><path class="uue-ojz7g"/><circle class="nv3r1zbmr"/><circle class="wzga5cc5k"/></g>`,
		"fallback": "lucide:shopping-cart-minus",
	});
}

export default Component;
