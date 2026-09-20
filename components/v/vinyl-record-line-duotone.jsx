import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h64qreepf.css';
import '../../css/b/bhgkc_7kn.css';
import '../../css/n/n0crg69zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="h64qreepf"/><path class="bhgkc_7kn"/><path class="n0crg69zm"/></g>`,
		"fallback": "solar:vinyl-record-line-duotone",
	});
}

export default Component;
