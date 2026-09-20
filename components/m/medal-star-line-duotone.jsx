import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u5a8z1bvb.css';
import '../../css/t/tu9ed8abb.css';
import '../../css/p/py9khzhop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u5a8z1bvb"/><path class="tu9ed8abb"/><path class="py9khzhop"/></g>`,
		"fallback": "solar:medal-star-line-duotone",
	});
}

export default Component;
