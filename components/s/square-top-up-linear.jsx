import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rfgt5wmxh.css';
import '../../css/z/zds-drrip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rfgt5wmxh"/><path class="zds-drrip"/></g>`,
		"fallback": "solar:square-top-up-linear",
	});
}

export default Component;
