import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_gvcf1zx.css';
import '../../css/j/jxzcahbwn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_gvcf1zx"/><path class="jxzcahbwn"/></g>`,
		"fallback": "bi:usb-micro",
	});
}

export default Component;
