import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/olhjwfbxv.css';
import '../../css/h/ht6vrl9xs.css';
import '../../css/p/ph4irppsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="olhjwfbxv"/><path class="ht6vrl9xs"/><path class="ph4irppsi"/></g>`,
		"fallback": "solar:ruler-cross-pen-line-duotone",
	});
}

export default Component;
