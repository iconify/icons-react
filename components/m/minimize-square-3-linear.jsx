import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cb03pibjf.css';
import '../../css/v/vv3m6lbyb.css';
import '../../css/y/yqghi_b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cb03pibjf"/><path class="vv3m6lbyb"/><path class="yqghi_b_r"/></g>`,
		"fallback": "solar:minimize-square-3-linear",
	});
}

export default Component;
