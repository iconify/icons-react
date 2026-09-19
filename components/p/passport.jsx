import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tcke7pbqg.css';
import '../../css/y/y-qjg-szy.css';
import '../../css/c/cnngty1vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tcke7pbqg"/><path class="y-qjg-szy"/><path class="cnngty1vp"/></g>`,
		"fallback": "hugeicons:passport",
	});
}

export default Component;
