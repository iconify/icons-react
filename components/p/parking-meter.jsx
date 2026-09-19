import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vp_8_1bnl.css';
import '../../css/h/h8_z3jbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vp_8_1bnl"/><path class="h8_z3jbvh"/></g>`,
		"fallback": "hugeicons:parking-meter",
	});
}

export default Component;
