import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_w_ij6ti.css';
import '../../css/r/rako__tyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_w_ij6ti"/><path class="rako__tyj"/></g>`,
		"fallback": "solar:shield-check-bold-duotone",
	});
}

export default Component;
