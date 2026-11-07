import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i1vfzkb9v.css';
import '../../css/r/rifo2czrt.css';
import '../../css/c/ctgpv1blf.css';
import '../../css/y/y8fghij0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i1vfzkb9v"/><path class="rifo2czrt"/><path class="ctgpv1blf"/><path class="y8fghij0j"/></g>`,
		"fallback": "solar:palette-line-duotone",
	});
}

export default Component;
