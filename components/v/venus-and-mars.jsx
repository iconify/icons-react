import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jgmr07b8f.css';
import '../../css/v/vn20zzbzj.css';
import '../../css/w/wqfr6m9_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jgmr07b8f"/><path class="vn20zzbzj"/><path class="wqfr6m9_i"/></g>`,
		"fallback": "hugeicons:venus-and-mars",
	});
}

export default Component;
