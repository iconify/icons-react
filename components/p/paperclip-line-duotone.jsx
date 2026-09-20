import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f0pgunbkn.css';
import '../../css/m/mx4bkxwyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f0pgunbkn"/><path class="mx4bkxwyy"/></g>`,
		"fallback": "solar:paperclip-line-duotone",
	});
}

export default Component;
