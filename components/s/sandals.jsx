import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wd-dv4b_e.css';
import '../../css/v/vgka4bcvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wd-dv4b_e"/><path class="vgka4bcvc"/></g>`,
		"fallback": "hugeicons:sandals",
	});
}

export default Component;
