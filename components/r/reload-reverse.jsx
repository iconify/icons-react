import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dx8_9ybqq.css';
import '../../css/r/rl_ushuxb.css';
import '../../css/v/vmzefi_hu.css';
import '../../css/n/ngcdsdbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dx8_9ybqq"/><path class="rl_ushuxb"/><path class="vmzefi_hu"/><path class="ngcdsdbtm"/></g>`,
		"fallback": "mage:reload-reverse",
	});
}

export default Component;
