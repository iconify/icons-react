import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/l/l8tiy2eeu.css';
import '../../css/n/n1j1stbmb.css';
import '../../css/j/j7jrpp0bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="l8tiy2eeu"/><path class="n1j1stbmb"/><path class="j7jrpp0bb"/></g>`,
		"fallback": "reicon:sms-edit",
	});
}

export default Component;
