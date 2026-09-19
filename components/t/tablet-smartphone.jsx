import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dp0kg2b8x.css';
import '../../css/a/a6l7ac95q.css';
import '../../css/b/bpn_39bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dp0kg2b8x"/><path class="a6l7ac95q"/><path class="bpn_39bkv"/></g>`,
		"fallback": "hugeicons:tablet-smartphone",
	});
}

export default Component;
