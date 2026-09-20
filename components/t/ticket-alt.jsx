import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l1ihxc_zr.css';
import '../../css/l/lbnnqilwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l1ihxc_zr"/><path class="lbnnqilwt"/></g>`,
		"fallback": "reicon:ticket-alt",
	});
}

export default Component;
