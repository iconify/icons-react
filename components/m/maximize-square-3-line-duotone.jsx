import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cn4_qkqch.css';
import '../../css/h/hb6t3lb4p.css';
import '../../css/y/yqghi_b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cn4_qkqch"/><path class="hb6t3lb4p"/><path class="yqghi_b_r"/></g>`,
		"fallback": "solar:maximize-square-3-line-duotone",
	});
}

export default Component;
