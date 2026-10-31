import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xm1miebeb.css';
import '../../css/k/koa44ygtc.css';
import '../../css/e/e1cglzaru.css';
import '../../css/e/ekuo8dzap.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xm1miebeb"/><path class="koa44ygtc wm-shadow"/><path class="e1cglzaru"/><path class="ekuo8dzap"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:star-off",
	});
}

export default Component;
