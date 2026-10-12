import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9mtmgbiz.css';
import '../../css/u/uzumdnd2u.css';
import '../../css/e/ewkmqabqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="y9mtmgbiz"/><rect class="uzumdnd2u"/><path class="ewkmqabqj"/></g>`,
		"fallback": "andrsrxn:stand-analytics",
	});
}

export default Component;
