import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y8zdmx7kg.css';
import '../../css/y/yh37ftn9n.css';
import '../../css/e/ell5nh48g.css';
import '../../css/u/u--jkffzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y8zdmx7kg"/><path class="yh37ftn9n"/><path class="ell5nh48g"/><path class="u--jkffzs"/></g>`,
		"fallback": "solar:link-broken-minimalistic-bold",
	});
}

export default Component;
