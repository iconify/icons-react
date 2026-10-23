import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i253fhbuh.css';
import '../../css/x/x8ufag99y.css';
import '../../css/m/m0p3numcs.css';
import '../../css/h/hpn6hg1wi.css';
import '../../css/p/pkn-uccgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i253fhbuh"/><path class="x8ufag99y"/><path class="m0p3numcs"/><path class="hpn6hg1wi"/><path class="pkn-uccgc"/></g>`,
		"fallback": "andrsrxn:microwave",
	});
}

export default Component;
