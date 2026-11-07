import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x325bsbbz.css';
import '../../css/g/gagp25bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x325bsbbz"/><path class="gagp25bjn"/></g>`,
		"fallback": "solar:volume-line-duotone",
	});
}

export default Component;
