import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nt-gmgbzs.css';
import '../../css/n/n_npn5bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nt-gmgbzs"/><path class="n_npn5bge"/></g>`,
		"fallback": "solar:tennis-linear",
	});
}

export default Component;
