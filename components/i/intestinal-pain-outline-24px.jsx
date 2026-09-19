import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qbl_i-bwf.css';
import '../../css/e/exi1_ybex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qbl_i-bwf"/><path class="exi1_ybex"/></g>`,
		"fallback": "healthicons:intestinal-pain-outline-24px",
	});
}

export default Component;
