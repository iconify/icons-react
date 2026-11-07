import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/ztf-8f7as.css';
import '../../css/s/s6u1swg_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ztf-8f7as"/><path class="s6u1swg_w"/></g>`,
		"fallback": "solar:stars-2-linear",
	});
}

export default Component;
