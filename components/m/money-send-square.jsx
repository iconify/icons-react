import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x7z8ft8ni.css';
import '../../css/q/qjyf55b-j.css';
import '../../css/e/eaoa-ybqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x7z8ft8ni"/><path class="qjyf55b-j"/><path class="eaoa-ybqh"/></g>`,
		"fallback": "hugeicons:money-send-square",
	});
}

export default Component;
