import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ajfenzn0j.css';
import '../../css/c/c6bmv3q-h.css';
import '../../css/h/hpbrvm4rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ajfenzn0j"/><path class="c6bmv3q-h"/><path class="hpbrvm4rm"/></g>`,
		"fallback": "hugeicons:iris-scan",
	});
}

export default Component;
