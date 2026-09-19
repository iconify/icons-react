import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kiqyvrgct.css';
import '../../css/j/j9jg2obxg.css';
import '../../css/n/no52ceyin.css';
import '../../css/j/j1jv3nb5v.css';
import '../../css/l/ltibckbkb.css';
import '../../css/y/yhvgtebli.css';
import '../../css/z/z-44bwbks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kiqyvrgct"/><path class="j9jg2obxg"/><path class="no52ceyin"/><path class="j1jv3nb5v"/><path class="ltibckbkb"/><path class="yhvgtebli"/><path class="z-44bwbks"/></g>`,
		"fallback": "fluent-emoji-flat:notebook-with-decorative-cover",
	});
}

export default Component;
