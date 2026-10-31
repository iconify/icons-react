import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xt59310qq.css';
import '../../css/g/g12cnm02j.css';
import '../../css/j/j95zarbuq.css';
import '../../css/p/pii_8qbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xt59310qq"/><path class="g12cnm02j wm-shadow"/><path class="j95zarbuq"/><path class="pii_8qbsq"/></g>`,
		"fallback": "withicons-brutal:minus",
	});
}

export default Component;
