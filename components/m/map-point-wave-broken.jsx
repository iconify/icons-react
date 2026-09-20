import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c8_7p-sow.css';
import '../../css/v/vv52kbcqz.css';
import '../../css/m/mma4vmbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c8_7p-sow"/><path class="vv52kbcqz"/><path class="mma4vmbcv"/></g>`,
		"fallback": "solar:map-point-wave-broken",
	});
}

export default Component;
