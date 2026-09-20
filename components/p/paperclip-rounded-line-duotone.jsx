import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d6vn_wbbv.css';
import '../../css/y/yydm3mbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d6vn_wbbv"/><path class="yydm3mbuw"/></g>`,
		"fallback": "solar:paperclip-rounded-line-duotone",
	});
}

export default Component;
