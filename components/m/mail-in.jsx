import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zhx9aotxt.css';
import '../../css/u/u-sf_6btt.css';
import '../../css/g/g5rmplr5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zhx9aotxt"/><path class="u-sf_6btt"/><path class="g5rmplr5j"/></g>`,
		"fallback": "iconoir:mail-in",
	});
}

export default Component;
