import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r8vezthtv.css';
import '../../css/k/keqt0zbld.css';
import '../../css/x/x1f4lc3zb.css';
import '../../css/k/kz8j27a0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r8vezthtv"/><path class="keqt0zbld"/><path class="x1f4lc3zb"/><path class="kz8j27a0y"/></g>`,
		"fallback": "solar:table-broken",
	});
}

export default Component;
