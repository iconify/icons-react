import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-d1zfbuf.css';
import '../../css/y/yseolwzdu.css';
import '../../css/w/wxyd3lb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t-d1zfbuf"/><path class="yseolwzdu"/><path class="wxyd3lb1i"/></g>`,
		"fallback": "solar:pen-2-line-duotone",
	});
}

export default Component;
