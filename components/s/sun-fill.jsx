import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zn54-c3sn.css';
import '../../css/o/oj20f_vvr.css';
import '../../css/d/dwrt84m-r.css';
import '../../css/a/ajohu1zpd.css';
import '../../css/t/tpa894-wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zn54-c3sn"/><path class="oj20f_vvr"/><path class="dwrt84m-r"/><path class="ajohu1zpd"/><path class="tpa894-wt"/></g>`,
		"fallback": "lets-icons:sun-fill",
	});
}

export default Component;
