import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zozlqirrp.css';
import '../../css/n/n8zxfbaww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zozlqirrp"/><path class="n8zxfbaww"/></g>`,
		"fallback": "solar:oven-mitts-minimalistic-line-duotone",
	});
}

export default Component;
