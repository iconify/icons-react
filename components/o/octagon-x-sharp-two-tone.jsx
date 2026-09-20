import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zu955kafx.css';
import '../../css/y/yu_vbv9kt.css';
import '../../css/w/w5-w_sbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zu955kafx"/><path class="yu_vbv9kt"/><path class="w5-w_sbbd"/></g>`,
		"fallback": "keyline-icons:octagon-x-sharp-two-tone",
	});
}

export default Component;
