import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pp0--x5-n.css';
import '../../css/c/cx25de5zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pp0--x5-n"/><circle class="cx25de5zj"/></g>`,
		"fallback": "solar:routing-broken",
	});
}

export default Component;
