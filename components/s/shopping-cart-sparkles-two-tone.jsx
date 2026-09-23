import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qh0_3ccet.css';
import '../../css/t/tpc9okbeq.css';
import '../../css/w/wfa-naces.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qh0_3ccet"/><path class="tpc9okbeq"/><path class="wfa-naces"/></g>`,
		"fallback": "keyline-icons:shopping-cart-sparkles-two-tone",
	});
}

export default Component;
