import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h64qreepf.css';
import '../../css/u/uj22mebwr.css';
import '../../css/k/klpl0gb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="h64qreepf"/><path class="uj22mebwr"/><path class="klpl0gb7n"/></g>`,
		"fallback": "solar:vinyl-record-line-duotone",
	});
}

export default Component;
