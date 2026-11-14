import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tlpmv6b8k.css';
import '../../css/d/df-j23bjo.css';
import '../../css/n/nxsctgbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tlpmv6b8k"/><path class="df-j23bjo"/><path class="nxsctgbfw"/></g>`,
		"fallback": "hugeicons:mail-setting-02",
	});
}

export default Component;
