import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hpzd0o1un.css';
import '../../css/h/h7_an4b6v.css';
import '../../css/v/vkq-lwbbj.css';
import '../../css/e/emlmruuit.css';
import '../../css/z/zp7-w1bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hpzd0o1un wm-shadow"/><path class="h7_an4b6v wm-shadow"/><path class="vkq-lwbbj"/><path class="emlmruuit"/><path class="zp7-w1bua"/></g>`,
		"fallback": "withicons-brutal:mic-vocal",
	});
}

export default Component;
