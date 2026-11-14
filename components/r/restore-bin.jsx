import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x75rvijcw.css';
import '../../css/k/kw_evg14q.css';
import '../../css/d/d3mtwbcfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x75rvijcw"/><path class="kw_evg14q"/><path class="d3mtwbcfv"/></g>`,
		"fallback": "hugeicons:restore-bin",
	});
}

export default Component;
