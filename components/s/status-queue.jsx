import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/p/pjald5e8h.css';
import '../../css/e/exb9ijb_u.css';
import '../../css/z/zq-svwb2a.css';
import '../../css/j/j_f9_0byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m4l-9ybuj"/><path class="pjald5e8h"/><path class="exb9ijb_u"/><rect class="zq-svwb2a"/><path class="j_f9_0byo"/></g>`,
		"fallback": "evicons:status-queue",
	});
}

export default Component;
