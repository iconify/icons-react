import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ald82rf_n.css';
import '../../css/k/k8-wr-pvm.css';
import '../../css/n/nz0ig3adr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ald82rf_n"/><path class="k8-wr-pvm"/><path class="nz0ig3adr"/></g>`,
		"fallback": "hugeicons:prisoner",
	});
}

export default Component;
