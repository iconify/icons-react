import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zzz5wyb1c.css';
import '../../css/u/ub5qtstcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zzz5wyb1c"/><path class="ub5qtstcy"/></g>`,
		"fallback": "solar:stars-2-broken",
	});
}

export default Component;
