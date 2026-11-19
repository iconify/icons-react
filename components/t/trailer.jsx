import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_kz6n-mp.css';
import '../../css/e/e-zb4h3nw.css';
import '../../css/z/zwa1wbcqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="b_kz6n-mp"/><path class="e-zb4h3nw"/><path class="zwa1wbcqx"/></g>`,
		"fallback": "andrsrxn:trailer",
	});
}

export default Component;
