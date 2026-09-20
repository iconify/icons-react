import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pd2qv-b4c.css';
import '../../css/f/fw8td_biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pd2qv-b4c"/><path class="fw8td_biz"/></g>`,
		"fallback": "solar:key-minimalistic-square-2-linear",
	});
}

export default Component;
