import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nt-gmgbzs.css';
import '../../css/k/kptbz4dgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nt-gmgbzs"/><path class="kptbz4dgm"/></g>`,
		"fallback": "solar:tennis-2-line-duotone",
	});
}

export default Component;
