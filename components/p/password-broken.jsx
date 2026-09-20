import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rab0f4brr.css';
import '../../css/x/xqy9hdcap.css';
import '../../css/a/a0n9s38id.css';
import '../../css/s/spvw1m4wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rab0f4brr"/><path class="xqy9hdcap"/><path class="a0n9s38id"/><path class="spvw1m4wo"/></g>`,
		"fallback": "solar:password-broken",
	});
}

export default Component;
