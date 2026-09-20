import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ya6370b_w.css';
import '../../css/j/jiep1lb5u.css';
import '../../css/z/zr_dy193o.css';
import '../../css/m/mexjjfbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ya6370b_w"/><path class="jiep1lb5u"/><path class="zr_dy193o"/><path class="mexjjfbmt"/></g>`,
		"fallback": "lucide-lab:sunlounger-parasol-sun-palmtree",
	});
}

export default Component;
