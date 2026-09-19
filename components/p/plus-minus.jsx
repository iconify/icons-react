import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m_n3hfvmo.css';
import '../../css/v/vx6s_6z_m.css';
import '../../css/l/l9asld1on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m_n3hfvmo"/><path class="vx6s_6z_m"/><path class="l9asld1on"/></g>`,
		"fallback": "hugeicons:plus-minus",
	});
}

export default Component;
