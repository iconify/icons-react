import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibrcm0b3s.css';
import '../../css/w/wdipljbrd.css';
import '../../css/x/xsl5v7bfz.css';
import '../../css/u/udovdvbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ibrcm0b3s"/><path class="wdipljbrd"/><path class="xsl5v7bfz"/><path class="udovdvbge"/></g>`,
		"fallback": "solar:rows-4-bold",
	});
}

export default Component;
