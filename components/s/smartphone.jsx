import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j54a0sjre.css';
import '../../css/d/d_zw_fy9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="j54a0sjre"/><path class="d_zw_fy9l"/></g>`,
		"fallback": "lucide:smartphone",
	});
}

export default Component;
