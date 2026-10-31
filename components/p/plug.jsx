import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c65g52bnz.css';
import '../../css/r/rrzsnmslp.css';
import '../../css/y/ykwud4bvv.css';
import '../../css/x/xunj3qfuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c65g52bnz wm-shadow"/><path class="rrzsnmslp wm-shadow"/><path class="ykwud4bvv"/><path class="xunj3qfuz"/></g>`,
		"fallback": "withicons-brutal:plug",
	});
}

export default Component;
