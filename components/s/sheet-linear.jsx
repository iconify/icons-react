import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hyvc97btq.css';
import '../../css/c/ck53_x6oq.css';
import '../../css/y/yklwhpb-j.css';
import '../../css/c/cm4zj5gvq.css';
import '../../css/x/xvjk-cbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hyvc97btq"/><path class="ck53_x6oq"/><path class="yklwhpb-j"/><path class="cm4zj5gvq"/><path class="xvjk-cbox"/></g>`,
		"fallback": "solar:sheet-linear",
	});
}

export default Component;
